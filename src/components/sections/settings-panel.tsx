import styles from "./settings-panel.module.css";
import { SETTINGS_ITEMS } from "./settings-data";

function getStatusClassName(enabled: boolean) {
  return `${styles.status} ${enabled ? styles.statusOn : styles.statusOff}`;
}

export function SettingsPanel() {
  return (
    <section className={styles.section}>
      {SETTINGS_ITEMS.map((item) => (
        <article key={item.title} className={styles.card} data-card>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
          <span className={getStatusClassName(item.enabled)}>
            {item.enabled ? "Enabled" : "Disabled"}
          </span>
        </article>
      ))}
    </section>
  );
}
