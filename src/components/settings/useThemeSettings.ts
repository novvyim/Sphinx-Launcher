import { useEffect, useState } from "react";
import { loadTheme, saveTheme, applyTheme } from "@/lib/theme";

export function useThemeSettings() {
  const [accent, setAccentState] = useState<string | null>(null);

  useEffect(() => {
    const theme = loadTheme();
    setAccentState(theme);
    applyTheme(theme);
  }, []);

  const setAccent = (key: string) => {
    setAccentState(key);
    saveTheme(key);
    applyTheme(key);
  };

  return { accent, setAccent };
}
