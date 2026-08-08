"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import NavItem from "@/components/NavItem";
import ProfileCard from "@/components/ProfileCard";

interface NavItemConfig {
  icon: string;
  label: string;
  badge?: string;
  href?: string;
  disabled?: boolean;
}

const NAV_ITEMS: NavItemConfig[] = [
  { icon: "fas fa-play", label: "Играть", href: "/" },
  { icon: "fas fa-server", label: "Серверы", badge: "DEV", disabled: true },
  { icon: "fas fa-palette", label: "Скины", badge: "DEV", disabled: true },
  {
    icon: "fas fa-microchip",
    label: "Мой сервер",
    badge: "DEV",
    disabled: true,
  },
  { icon: "fas fa-cog", label: "Настройки", href: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const navigate = (href: string) => router.push(href);

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
      <button className="header-btn" onClick={toggleSidebar}>
        <i
          className={collapsed ? "fas fa-chevron-right" : "fas fa-chevron-left"}
        ></i>
        <span>{collapsed ? "Развернуть" : "Свернуть"}</span>
      </button>

      <div className="nav-list">
        {NAV_ITEMS.map((item) => {
          const href = item.href;
          return (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              disabled={item.disabled}
              active={href === pathname}
              onClick={
                href && !item.disabled ? () => navigate(href) : undefined
              }
            />
          );
        })}
      </div>

      <ProfileCard />
    </div>
  );
}
