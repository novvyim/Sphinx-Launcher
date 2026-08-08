"use client";

import { useEffect, useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import SettingsBlock from "@/components/settings/SettingsBlock";
import ButtonGroup from "@/components/settings/ButtonGroup";
import Dropdown from "@/components/settings/Dropdown";
import { saveJavaPath, loadJavaVersion, saveJavaVersion } from "@/lib/theme";

const JAVA_VERSIONS = [8, 11, 17, 21, 25];

export default function GameSection() {
  const [javaVersion, setJavaVersion] = useState("");

  useEffect(() => {
    setJavaVersion(loadJavaVersion() || "21");
  }, []);

  const pickJava = async () => {
    try {
      const selected = await open({
        multiple: false,
        directory: false,
        filters: [{ name: "Java", extensions: ["exe"] }],
      });
      if (typeof selected === "string") {
        saveJavaPath(selected);
      }
    } catch {}
  };

  const selectJavaVersion = (option: string) => {
    const version = option.replace("Java ", "");
    setJavaVersion(version);
    saveJavaVersion(version);
  };

  return (
    <section>
      <div className="section-title">Игра</div>

      <SettingsBlock
        title="Скачать Java"
        description="Возьмём сборку Eclipse Temurin с проверкой контрольной суммы"
      >
        <Dropdown
          value={`Java ${javaVersion}`}
          options={JAVA_VERSIONS.map((java) => `Java ${java}`)}
          onChange={selectJavaVersion}
        />
        <button className="btn-secondary">
          <i className="fas fa-download"></i>
          <span>Скачать</span>
        </button>
      </SettingsBlock>

      <SettingsBlock
        title="Папка игры"
        description="Сборки, миры и ассеты игры"
      >
        <button className="btn-secondary">Открыть</button>
        <button className="btn-secondary">Сменить</button>
      </SettingsBlock>

      <SettingsBlock
        title="Кэш и временные файлы"
        description="0 МБ можно освободить"
      >
        <button className="btn-secondary">
          <i className="fas fa-trash"></i>
          <span>Очистить</span>
        </button>
      </SettingsBlock>
    </section>
  );
}
