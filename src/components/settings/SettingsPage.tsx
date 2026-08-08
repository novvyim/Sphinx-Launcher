"use client";

import AppearanceSection from "@/components/settings/AppearanceSection";
import BackgroundSection from "@/components/settings/BackgroundSection";
import GameSection from "@/components/settings/GameSection";
import { useThemeSettings } from "@/components/settings/useThemeSettings";

export default function SettingsPage() {
  const { accent, setAccent } = useThemeSettings();

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-heading">Настройки</h1>
        <AppearanceSection accent={accent} onAccentSelect={setAccent} />
        <BackgroundSection />
        <GameSection />
      </div>
    </div>
  );
}
