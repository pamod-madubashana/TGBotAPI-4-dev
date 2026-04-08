[CmdletBinding(DefaultParameterSetName = "bump")]
param(
  [Parameter(ParameterSetName = "bump")]
  [ValidateSet("patch", "minor", "major")]
  [string]$Bump = "patch",

  [Parameter(ParameterSetName = "set")]
  [string]$Version,

  [switch]$DryRun,
  [switch]$AllowMismatch
)

$ErrorActionPreference = "Stop"

function Parse-SemVer {
  param([Parameter(Mandatory = $true)][string]$Value)

  $m = [regex]::Match($Value, '^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)$')
  if (-not $m.Success) {
    throw "Invalid version '$Value'. Expected semver: MAJOR.MINOR.PATCH (e.g. 1.2.3)."
  }

  return [pscustomobject]@{
    Major = [int]$m.Groups["major"].Value
    Minor = [int]$m.Groups["minor"].Value
    Patch = [int]$m.Groups["patch"].Value
    Text  = $Value
  }
}

function Get-FileVersion {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Pattern,
    [Parameter(Mandatory = $true)][string]$Label
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    throw "Missing file: $Path"
  }

  $content = Get-Content -LiteralPath $Path -Raw -Encoding utf8
  $m = [regex]::Match($content, $Pattern)
  if (-not $m.Success) {
    throw "Could not find version in $Label ($Path)."
  }

  return $m.Groups["ver"].Value
}

function Replace-InFileOnce {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Pattern,
    [Parameter(Mandatory = $true)][string]$Replacement,
    [Parameter(Mandatory = $true)][string]$Label
  )

  $content = Get-Content -LiteralPath $Path -Raw -Encoding utf8
  $re = [regex]::new($Pattern)
  $matches = $re.Matches($content)
  if ($matches.Count -ne 1) {
    throw "Expected exactly 1 match in $Label ($Path), found $($matches.Count)."
  }

  $updated = $re.Replace($content, $Replacement, 1)
  if (-not $DryRun) {
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $updated, $utf8NoBom)
  }
}

function Replace-InFileN {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Pattern,
    [Parameter(Mandatory = $true)][string]$Replacement,
    [Parameter(Mandatory = $true)][int]$Count,
    [Parameter(Mandatory = $true)][string]$Label
  )

  $content = Get-Content -LiteralPath $Path -Raw -Encoding utf8
  $re = [regex]::new($Pattern)
  $matches = $re.Matches($content)
  if ($matches.Count -ne $Count) {
    throw "Expected exactly $Count matches in $Label ($Path), found $($matches.Count)."
  }

  $updated = $re.Replace($content, $Replacement)
  if (-not $DryRun) {
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $updated, $utf8NoBom)
  }
}

function Find-RepoRoot {
  param([Parameter(Mandatory = $true)][string]$Start)

  $dir = (Resolve-Path -LiteralPath $Start).Path
  while ($true) {
    $hasPackageJson = Test-Path -LiteralPath (Join-Path $dir "package.json")
    $hasCargoToml = Test-Path -LiteralPath (Join-Path $dir "src-tauri/Cargo.toml")
    if ($hasPackageJson -and $hasCargoToml) {
      return $dir
    }

    $parent = Split-Path -Parent $dir
    if ($parent -eq $dir -or [string]::IsNullOrWhiteSpace($parent)) {
      throw "Could not locate repo root from '$Start'. Expected to find package.json and src-tauri/Cargo.toml in a parent directory."
    }
    $dir = $parent
  }
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Find-RepoRoot -Start $scriptDir

$paths = [ordered]@{
  PackageJson     = Join-Path $root "package.json"
  CargoToml       = Join-Path $root "src-tauri/Cargo.toml"
  TauriConfJson   = Join-Path $root "src-tauri/tauri.conf.json"
}

$patterns = [ordered]@{
  PackageJson   = '"version"\s*:\s*"(?<ver>\d+\.\d+\.\d+)"'
  CargoToml     = '(?m)^version\s*=\s*"(?<ver>\d+\.\d+\.\d+)"\s*$'
  TauriConfJson = '"version"\s*:\s*"(?<ver>\d+\.\d+\.\d+)"'
}

$current = [ordered]@{
  package = Get-FileVersion -Path $paths.PackageJson -Pattern $patterns.PackageJson -Label "package.json"
  cargo   = Get-FileVersion -Path $paths.CargoToml -Pattern $patterns.CargoToml -Label "src-tauri/Cargo.toml"
  tauri   = Get-FileVersion -Path $paths.TauriConfJson -Pattern $patterns.TauriConfJson -Label "src-tauri/tauri.conf.json"
}

if (-not $AllowMismatch) {
  $unique = @($current.Values | Sort-Object -Unique)
  if ($unique.Count -ne 1) {
    $details = ($current.GetEnumerator() | ForEach-Object { "$($_.Key)=$($_.Value)" }) -join ", "
    throw "Version mismatch across files ($details). Re-run with -AllowMismatch to force using package.json as the source."
  }
}

$source = Parse-SemVer -Value $current.package

if ($PSCmdlet.ParameterSetName -eq "set") {
  $target = Parse-SemVer -Value $Version
} else {
  $major = $source.Major
  $minor = $source.Minor
  $patch = $source.Patch
  switch ($Bump) {
    "major" { $major++; $minor = 0; $patch = 0 }
    "minor" { $minor++; $patch = 0 }
    "patch" { $patch++ }
  }
  $target = Parse-SemVer -Value "$major.$minor.$patch"
}

$old = $source.Text
$new = $target.Text

if ($old -eq $new) {
  Write-Host "Version already $new; nothing to do."
  exit 0
}

$suffix = $(if ($DryRun) { " (dry-run)" } else { "" })
Write-Host "Bumping version: $old -> $new$suffix"

# package.json
Replace-InFileOnce -Path $paths.PackageJson -Pattern $patterns.PackageJson -Replacement ('"version": "' + $new + '"') -Label "package.json"

# src-tauri/Cargo.toml
Replace-InFileOnce -Path $paths.CargoToml -Pattern $patterns.CargoToml -Replacement ('version = "' + $new + '"') -Label "src-tauri/Cargo.toml"

# src-tauri/tauri.conf.json
Replace-InFileOnce -Path $paths.TauriConfJson -Pattern $patterns.TauriConfJson -Replacement ('"version": "' + $new + '"') -Label "src-tauri/tauri.conf.json"

Write-Host "Updated: package.json, src-tauri/Cargo.toml, src-tauri/tauri.conf.json"
