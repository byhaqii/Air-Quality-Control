"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import {
  SIDEBAR_NAV_ITEMS,
  SIDEBAR_SUBTITLE,
  SIDEBAR_TITLE,
  type SidebarNavItem,
} from "./sidebar-config";

const NAV_ICON_MAP: Record<string, string> = {
  Dashboard: "⌂",
  History: "◷",
  Devices: "◉",
  About: "ℹ",
  Settings: "⚙",
};

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const asideClassName = `${styles.aside} ${isOpen ? styles.open : styles.closed}`;
  const headerClassName = `${styles.header} ${isOpen ? "" : styles.headerClosed}`;
  const menuButtonClassName = `${styles.menuButton} ${isOpen ? styles.menuButtonOpen : styles.menuButtonClosed}`;
  const navClassName = `${styles.nav} ${isOpen ? "" : styles.navClosed}`;

  const toggleButtonLabel = isOpen ? "←" : "☰";
  const toggleButtonAriaLabel = isOpen ? "Close sidebar" : "Open sidebar";

  const getLinkClassName = (isActive: boolean) => {
    const sizeClassName = isOpen ? styles.navLinkOpen : styles.navLinkClosed;
    const stateClassName = isActive ? styles.navLinkActive : styles.navLinkInactive;
    return `${styles.navLink} ${sizeClassName} ${stateClassName}`;
  };

  const getIndicatorClassName = (isActive: boolean) => {
    return `${styles.indicator} ${isActive ? styles.indicatorActive : ""}`;
  };

  const getIconTextClassName = (isActive: boolean) => {
    return `${styles.iconText} ${isActive ? styles.iconTextActive : ""}`;
  };

  const renderNavLink = (item: SidebarNavItem) => {
    const isActive = pathname === item.href;
    const iconSymbol = NAV_ICON_MAP[item.label] ?? "•";

    return (
      <Link
        key={item.href}
        href={item.href}
        className={getLinkClassName(isActive)}
        title={item.label}
      >
        <span className={getIndicatorClassName(isActive)}>
          <span className={getIconTextClassName(isActive)}>{iconSymbol}</span>
        </span>
        {isOpen ? <span>{item.label}</span> : null}
      </Link>
    );
  };

  return (
    <aside className={asideClassName}>
      <div className={headerClassName}>
        {isOpen ? (
          <div>
            <h2 className={styles.brandTitle}>{SIDEBAR_TITLE}</h2>
            <p className={styles.brandSubtitle}>{SIDEBAR_SUBTITLE}</p>
          </div>
        ) : null}
        <button
          type="button"
          onClick={onToggle}
          className={menuButtonClassName}
          aria-label={toggleButtonAriaLabel}
        >
          {toggleButtonLabel}
        </button>
      </div>

      <nav className={navClassName}>
        {SIDEBAR_NAV_ITEMS.map(renderNavLink)}
      </nav>

      {isOpen ? (
        <button className={styles.refreshOpen}>
          Refresh Sensors
        </button>
      ) : (
        <button className={styles.refreshClosed} aria-label="Refresh Sensors" title="Refresh Sensors">
          R
        </button>
      )}
    </aside>
  );
}
