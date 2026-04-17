import { devices } from "@/lib/mock-data";
import styles from "./devices-grid.module.css";

function getStatusClassName(isOnline: boolean) {
  return `${styles.status} ${isOnline ? styles.statusOnline : styles.statusOffline}`;
}

function getLastActiveClassName(isOnline: boolean) {
  return isOnline ? styles.value : `${styles.value} ${styles.valueOffline}`;
}

export function DevicesGrid() {
  return (
    <section className={styles.grid}>
      {devices.map((device) => {
        const isOnline = device.status === "Online";

        return (
          <article key={device.id} className={styles.card}>
            <div className={styles.head}>
              <h3 className={styles.name}>{device.name}</h3>
              <span className={getStatusClassName(isOnline)}>
                {device.status}
              </span>
            </div>
            <p className={styles.location}>{device.location}</p>
            <dl className={styles.list}>
              <div className={styles.row}>
                <dt className={styles.term}>Type</dt>
                <dd className={styles.value}>{device.type}</dd>
              </div>
              <div className={styles.row}>
                <dt className={styles.term}>Last Active</dt>
                <dd className={getLastActiveClassName(isOnline)}>{device.lastActive}</dd>
              </div>
              <div className={styles.row}>
                <dt className={styles.term}>Firmware</dt>
                <dd className={styles.value}>{device.firmware}</dd>
              </div>
            </dl>
          </article>
        );
      })}
    </section>
  );
}
