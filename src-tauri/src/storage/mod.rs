use serde::de::DeserializeOwned;
use serde::Serialize;
use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};

fn storage_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let directory = app
        .path()
        .app_data_dir()
        .map_err(|error| format!("failed to resolve app data directory: {error}"))?
        .join("storage");

    fs::create_dir_all(&directory)
        .map_err(|error| format!("failed to create storage directory: {error}"))?;

    Ok(directory)
}

fn storage_file(app: &AppHandle, file_name: &str) -> Result<PathBuf, String> {
    Ok(storage_dir(app)?.join(file_name))
}

pub fn read_json<T>(app: &AppHandle, file_name: &str) -> Result<T, String>
where
    T: DeserializeOwned + Default,
{
    let path = storage_file(app, file_name)?;

    if !path.exists() {
        return Ok(T::default());
    }

    let contents = fs::read_to_string(&path)
        .map_err(|error| format!("failed to read {}: {error}", path.display()))?;

    serde_json::from_str(&contents)
        .map_err(|error| format!("failed to parse {}: {error}", path.display()))
}

pub fn write_json<T>(app: &AppHandle, file_name: &str, value: &T) -> Result<(), String>
where
    T: Serialize,
{
    let path = storage_file(app, file_name)?;
    let contents = serde_json::to_string_pretty(value)
        .map_err(|error| format!("failed to serialize {file_name}: {error}"))?;

    fs::write(&path, contents)
        .map_err(|error| format!("failed to write {}: {error}", path.display()))
}
