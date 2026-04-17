import type { ReactNode } from "react";
import styles from "./topbar.module.css";

type TopbarProps = {
  title: string;
  description: string;
  rightSlot?: ReactNode;
};

export function Topbar({ title, description, rightSlot }: TopbarProps) {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.badge}>
          System Online
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      {rightSlot ? <div>{rightSlot}</div> : null}
    </header>
  );
}
