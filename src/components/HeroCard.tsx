"use client";

import { openUrl } from "@tauri-apps/plugin-opener";

const TELEGRAM_URL = "https://t.me/sphinx";

export default function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-info">
          <div className="hero-label">v0.1 • В разработке</div>
          <div className="hero-title">Sphinx Launcher</div>
          <div className="hero-tags">
            <span className="hero-tag">created by @saetiik ❤️</span>
            <span className="hero-tag">релиз: 31.12.2026</span>
          </div>
        </div>
        <div className="hero-actions">
          <button className="play-btn" onClick={() => openUrl(TELEGRAM_URL)}>
            <i className="fa-brands fa-telegram" aria-hidden="true"></i>
            Наш телеграм
          </button>
        </div>
      </div>
    </div>
  );
}
