import styles from "./stat-card.module.css";

type StatCardProps = {
  label: string;
  value: string;
  unit?: string;
  trend?: string;
};

export function StatCard({ label, value, unit, trend }: StatCardProps) {
  let trendColorClassName = styles.trendCyan;

  if (trend?.startsWith("+")) {
    trendColorClassName = styles.trendRose;
  } else if (trend === "0%") {
    trendColorClassName = styles.trendSlate;
  }

  return (
    <article className={styles.card}>
      <div className={styles.row}>
        <p className={styles.label}>{label}</p>
        {trend ? <p className={`${styles.trend} ${trendColorClassName}`}>{trend}</p> : null}
      </div>
      <p className={styles.value}>{value}</p>
      {unit ? <p className={styles.unit}>{unit}</p> : null}
    </article>
  );
}
