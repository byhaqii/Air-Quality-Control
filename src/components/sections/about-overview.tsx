import styles from "./about-overview.module.css";

export function AboutOverview() {
  return (
    <section className={styles.section}>
      <p className={styles.intro}>
        Atmospheric Intelligence is a beginner-friendly cloud monitoring dashboard for visualizing
        environmental data from distributed sensors in real time.
      </p>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h2 className={styles.title}>System Architecture</h2>
          <p className={styles.desc}>
            Sensor nodes send telemetry to cloud services, then the web app displays the latest
            readings for easier monitoring.
          </p>

          <div className={styles.metricGrid}>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>Latency</p>
              <p className={styles.metricValue}>&lt; 50ms</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>Precision</p>
              <p className={styles.metricValue}>99.9%</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>Uptime</p>
              <p className={styles.metricValue}>99.99%</p>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <h3 className={styles.subtitle}>Neural Processing</h3>
          <p className={styles.desc}>
            Data is filtered and grouped before being shown on the dashboard.
          </p>
          <div className={styles.barWrap}>
            <div className={styles.bar} />
          </div>
          <p className={styles.barLabel}>Processing Load</p>
        </article>
      </div>
    </section>
  );
}
