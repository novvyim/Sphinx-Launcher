interface NavItemProps {
  icon: string;
  label: string;
  badge?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function NavItem({ icon, label, badge, active, disabled, onClick }: NavItemProps) {
  const className = ["nav-item", active ? "active" : "", disabled ? "disabled" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <i className={icon}></i>
      <span>{label}</span>
      {badge && <span className="badge">{badge}</span>}
    </button>
  );
}
