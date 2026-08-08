import { ACCENT_COLORS } from "@/lib/theme";

interface ColorGridProps {
  accent: string | null;
  onSelect: (accent: string) => void;
}

export default function ColorGrid({ accent, onSelect }: ColorGridProps) {
  return (
    <div className="color-grid">
      {ACCENT_COLORS.map((option) => (
        <button
          key={option.key}
          className={option.key === accent ? "color-dot active" : "color-dot"}
          style={{ background: option.color }}
          onClick={() => onSelect(option.key)}
        ></button>
      ))}
    </div>
  );
}
