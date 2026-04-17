"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import styles from "./dashboard-shell.module.css";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen((current) => !current);
  };

  const mainClassName = `${styles.main} ${sidebarOpen ? styles.mainOpen : styles.mainClosed}`;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Sidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
        <main className={mainClassName}>
          {children}
        </main>
      </div>
    </div>
  );
}
