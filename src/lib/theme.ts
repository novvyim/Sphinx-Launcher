import { darken, isLight, lighten, mix, rgba } from "@/lib/color";

export interface AccentOption {
  key: string;
  color: string;
}

export const ACCENT_COLORS: AccentOption[] = [
  { key: "green", color: "#6cdb3f" },
  { key: "lime", color: "#94e62e" },
  { key: "teal", color: "#1fb6a6" },
  { key: "sky", color: "#13b5ea" },
  { key: "blue", color: "#4d8aff" },
  { key: "indigo", color: "#7555ff" },
  { key: "purple", color: "#a855f7" },
  { key: "pink", color: "#f958b3" },
  { key: "red", color: "#ff5166" },
  { key: "orange", color: "#ff9640" },
  { key: "yellow", color: "#ffcd39" },
];

export const DEFAULT_ACCENT = "teal";

export type ThemeVars = Record<string, string>;

function buildVars(color: string): ThemeVars {
  return {
    "--accent": color,
    "--accent-hover": lighten(color, 0.15),
    "--accent-soft": mix(color, "#111114", 0.75),
    "--accent-soft-hover": mix(color, "#111114", 0.7),
    "--accent-badge-bg": mix(color, "#111114", 0.66),
    "--accent-badge-text": lighten(color, 0.25),
    "--button-bg": color,
    "--button-hover": darken(color, 0.1),
    "--button-text": isLight(color) ? "#111114" : "#ffffff",
    "--button-shadow": rgba(color, 0.2),
    "--button-shadow-hover": rgba(color, 0.3),
  };
}

export const ACCENTS: Record<string, ThemeVars> = Object.fromEntries(
  ACCENT_COLORS.map((option) => [option.key, buildVars(option.color)]),
);

const ACCENT_STORAGE_KEY = "sphinx.accent";

export function isAccentKey(value: string | null): value is string {
  return value !== null && value in ACCENTS;
}

export function applyTheme(accent: string) {
  const root = document.documentElement;
  Object.values(ACCENTS).forEach((vars) =>
    Object.keys(vars).forEach((key) => root.style.removeProperty(key)),
  );
  Object.entries(ACCENTS[accent]).forEach(([key, value]) => root.style.setProperty(key, value));
}

export function loadTheme(): string {
  const stored = localStorage.getItem(ACCENT_STORAGE_KEY);
  return isAccentKey(stored) ? stored : DEFAULT_ACCENT;
}

export function saveTheme(accent: string) {
  if (accent === DEFAULT_ACCENT) {
    localStorage.removeItem(ACCENT_STORAGE_KEY);
  } else {
    localStorage.setItem(ACCENT_STORAGE_KEY, accent);
  }
}

const JAVA_PATH_STORAGE_KEY = "sphinx.java-path";
const JAVA_VERSION_STORAGE_KEY = "sphinx.java-version";

export function saveJavaPath(path: string) {
  if (path) {
    localStorage.setItem(JAVA_PATH_STORAGE_KEY, path);
  } else {
    localStorage.removeItem(JAVA_PATH_STORAGE_KEY);
  }
}

export function loadJavaVersion(): string {
  return localStorage.getItem(JAVA_VERSION_STORAGE_KEY) ?? "";
}

export function saveJavaVersion(version: string) {
  if (version) {
    localStorage.setItem(JAVA_VERSION_STORAGE_KEY, version);
  } else {
    localStorage.removeItem(JAVA_VERSION_STORAGE_KEY);
  }
}
