interface SettingsBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function SettingsBlock({ title, description, children }: SettingsBlockProps) {
  return (
    <div className="setting-block">
      <div className="setting-info">
        <div className="setting-title">{title}</div>
        {description && <div className="setting-desc">{description}</div>}
      </div>
      <div className="setting-control">{children}</div>
    </div>
  );
}
