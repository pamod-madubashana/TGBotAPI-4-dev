<p align="center">
  <img src="src-tauri/icons/icon.png" alt="TG API Tester icon" width="96" height="96" />
</p>

<h1 align="center">Telegram Bot API Tester</h1>

<p align="center">
  Desktop app for exploring, testing, and sending real Telegram Bot API requests with a React + Tauri + Rust stack.
</p>

## Overview

Telegram Bot API Tester is a desktop-first tool for working with the official Telegram Bot API.
It keeps the UI focused on fast testing workflows while routing real network requests through a Tauri v2 Rust backend.

The app is designed around one core rule:

- one Telegram method = one React method file + one Rust method file

That structure keeps the project easy to extend, review, and maintain as Telegram adds more methods.

## Main Features

- Desktop app built with Tauri v2, React 18, TypeScript, and Rust
- Local bot token storage through Tauri commands
- Real Telegram Bot API execution from the Rust backend
- Generated method registry based on the official Telegram Bot API spec
- Generated Telegram type reference data for in-app browsing
- Visual request testing UI that preserves the existing app design
- Visual `reply_markup` editor for inline keyboards, reply keyboards, remove keyboard, and force reply
- Desktop-oriented UX with disabled context menu and reduced browser-like behavior

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Desktop shell: Tauri v2
- Backend: Rust
- API target: Telegram Bot API

## Project Structure

```text
src/
  components/
    app/
    ui/
  lib/
  methods/
  pages/
  store/
  types/

src-tauri/
  src/
    commands/
    storage/
    telegram/
```

## How It Works

1. The user logs in with a Telegram bot token.
2. The frontend validates the token through a Tauri command using `getMe`.
3. The token is stored locally through the Rust backend.
4. Method forms are rendered from generated frontend metadata.
5. Requests are executed by Rust modules in `src-tauri/src/telegram/`.
6. Telegram responses are shown back in the existing desktop UI.

## Current Direction

This repository is being built into a complete Telegram Bot API desktop testing tool.
The current implementation already focuses on:

- preserving the original UI instead of regenerating it
- connecting the React frontend to a real Tauri backend
- expanding Telegram method coverage from the official API spec
- improving desktop UX and visual editors for complex request fields

## Development Notes

- Frontend methods live in `src/methods/`
- Rust Telegram handlers live in `src-tauri/src/telegram/`
- Shared app guidance for coding agents lives in `AGENTS.md`
- Generated Telegram assets can be regenerated with `npm run generate:telegram`

## Goal

The goal of this project is to provide a polished desktop app for Telegram bot developers who want a faster and more structured alternative to manually testing Bot API requests in web tools or raw HTTP clients.
