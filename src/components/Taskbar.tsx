"use client";

import { getCurrentWindow } from "@tauri-apps/api/window";
import WindowControls from "@/components/WindowControls";

export default function Taskbar() {
  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest(".window-controls")) return;
    getCurrentWindow().startDragging();
  };

  return (
    <div className="taskbar" onMouseDown={startDrag}>
      <div className="taskbar-center">
        <i className="fas fa-cube"></i>
        <span>Sphinx Launcher</span>
      </div>
      <WindowControls />
    </div>
  );
}
