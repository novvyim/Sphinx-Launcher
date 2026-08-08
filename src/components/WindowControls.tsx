"use client";

import { getCurrentWindow } from "@tauri-apps/api/window";

export default function WindowControls() {
  const handleMinimize = () => getCurrentWindow().minimize();
  const handleMaximize = () => getCurrentWindow().toggleMaximize();
  const handleClose = () => getCurrentWindow().close();

  return (
    <div className="window-controls">
      <div className="dot close" onClick={handleClose}></div>
      <div className="dot minimize" onClick={handleMinimize}></div>
      <div className="dot maximize" onClick={handleMaximize}></div>
    </div>
  );
}
