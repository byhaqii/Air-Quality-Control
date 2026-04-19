import { liveIndex, metrics } from "@/lib/mock-data";
import { StatCard } from "@/components/ui/stat-card";
import styles from "./dashboard-overview.module.css";

export function DashboardOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.mainGrid}>
        <article className={styles.indexCard} data-card>
          <p className={styles.indexLabel}>Overall Index</p>
          <h2 className={styles.indexTitle}>Air Quality</h2>
          <div className={styles.indexValueRow}>
            <span className={styles.indexValue}>{liveIndex}</span>
            <span className={styles.indexUnit}>AQI</span>
          </div>
          <p className={styles.indexDesc}>
            Conditions are currently optimal. Minimal health risk for the general population.
          </p>
        </article>

        <article className={styles.chartCard} data-card>
          <h3 className={styles.chartTitle}>PM2.5 Concentration</h3>
          <p className={styles.chartSubtitle}>Real-time observation for the last hour.</p>
          <div className={styles.chartPlaceholderWrap}>
            <div className={styles.chartPlaceholder} />
          </div>
        </article>
      </div>

      <div className={styles.statGrid}>
        {metrics.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            unit={item.unit}
            trend={item.trend}
          />
        ))}
      </div>
    </section>
  );
}
