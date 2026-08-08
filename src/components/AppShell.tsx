"use client";

import { useEffect } from "react";
import Taskbar from "@/components/Taskbar";
import Sidebar from "@/components/Sidebar";
import { loadTheme, applyTheme } from "@/lib/theme";

export default function AppShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme(loadTheme());
  }, []);

  return (
    <>
      <Taskbar />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </>
  );
}
