mod commands;
mod storage;
mod telegram;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            commands::execute_telegram_method,
            commands::history::get_request_history,
            commands::presets::get_presets,
            commands::presets::save_preset,
            commands::settings::get_settings,
            commands::settings::save_settings,
            commands::tokens::clear_saved_token,
            commands::tokens::get_saved_token,
            commands::tokens::save_bot_token,
            commands::tokens::validate_bot_token,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
