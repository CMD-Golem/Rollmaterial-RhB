#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::env;
use std::fs;

#[tauri::command]
fn read_from_arg() -> String {
	let args: Vec<String> = env::args().collect();
	let file_path = &args[1];

	let contents = fs::read_to_string(file_path).expect("Unable to read file");

	// let joined = args.join(", ");
	contents.into()
}

#[tauri::command]
fn write_to_arg(content: String) {
	let args: Vec<String> = env::args().collect();
	let file_path = &args[1];

	fs::write(file_path, content).expect("Unable to write file");
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![read_from_arg, write_to_arg])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
