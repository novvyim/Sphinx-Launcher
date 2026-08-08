"use client";

import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import SettingsBlock from "@/components/settings/SettingsBlock";
import ButtonGroup from "@/components/settings/ButtonGroup";

const BACKGROUND_THUMBS = ["#7cc5a8", "#96806e", "#848a6a", "#6a8c7a"];

export default function BackgroundSection() {
  const [mode, setMode] = useState("Выбранный");
  const [selected, setSelected] = useState(1);

  const pickBackground = async () => {
    try {
      await open({
        multiple: false,
        filters: [
          { name: "Изображения", extensions: ["png", "jpg", "jpeg", "gif", "webp"] },
          { name: "Видео", extensions: ["mp4", "webm", "mov"] },
        ],
      });
    } catch {}
  };

  return (
    <section>
      <div className="section-title">Фон при запуске</div>

      <SettingsBlock title="Фон при запуске" description="Случайный — при каждом запуске одно из видео">
        <ButtonGroup options={["Случайный", "Выбранный"]} active={mode} onChange={setMode} />
      </SettingsBlock>

      <SettingsBlock title="Выбрать фон" description="Одно из видео — станет фоном главного экрана">
        <div className="thumb-grid">
          {BACKGROUND_THUMBS.map((color, index) => (
            <button
              key={color}
              className={index === selected ? "thumb-item active" : "thumb-item"}
              style={{ background: color }}
              onClick={() => setSelected(index)}
            ></button>
          ))}
        </div>
      </SettingsBlock>

      <SettingsBlock title="Свои фоны" description="Картинка, гифка или видео — храним последние 4">
        <button className="btn-upload" onClick={pickBackground}>
          <i className="fas fa-upload"></i>
          <span>Загрузить</span>
        </button>
      </SettingsBlock>
    </section>
  );
}
