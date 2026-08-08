"use client";

import { useState } from "react";
import SettingsBlock from "@/components/settings/SettingsBlock";
import ButtonGroup from "@/components/settings/ButtonGroup";
import Toggle from "@/components/settings/Toggle";
import ColorGrid from "@/components/settings/ColorGrid";

interface AppearanceSectionProps {
  accent: string | null;
  onAccentSelect: (accent: string) => void;
}

export default function AppearanceSection({
  accent,
  onAccentSelect,
}: AppearanceSectionProps) {
  const [overlay, setOverlay] = useState(true);

  return (
    <section>
      <div className="section-title">Оформление</div>

      <SettingsBlock title="Тема">
        <ButtonGroup options={["Тёмная", "Светлая", "Авто"]} active="Тёмная" />
      </SettingsBlock>

      <SettingsBlock title="Акцент" description="Цвет кнопок и выделения">
        <ColorGrid accent={accent} onSelect={onAccentSelect} />
      </SettingsBlock>

      <SettingsBlock
        title="Оверлей поверх игры"
        description="Сообщения друзей прямо в Minecraft. Вызов — Alt+M. Нужен оконный или безрамочный режим"
      >
        <Toggle checked={overlay} onChange={setOverlay} />
      </SettingsBlock>
    </section>
  );
}
