import { anomalies, historyData } from "@/lib/mock-data";
import styles from "./history-chart.module.css";

export function HistoryChart() {
  const maxValue = Math.max(...historyData.map((item) => item.aqi));

  const getStatusClassName = (status: string) => {
    if (status === "Elevated") {
      return `${styles.statusPill} ${styles.statusElevated}`;
    }

    if (status === "Moderate") {
      return `${styles.statusPill} ${styles.statusModerate}`;
    }

    return `${styles.statusPill} ${styles.statusOptimal}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.controlsCard}>
        <div className={styles.controlsRow}>
          <input
            type="text"
            placeholder="Search sensor ID or location..."
            className={styles.searchInput}
            readOnly
          />
          <div className={styles.tabWrap}>
            <button className={`${styles.tabButton} ${styles.tabButtonActive}`}>Daily</button>
            <button className={styles.tabButton}>Weekly</button>
            <button className={styles.tabButton}>Monthly</button>
          </div>
          <div className={styles.datePill}>
            Oct 1 - Oct 31, 2023
          </div>
        </div>
      </div>

      <article className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <div>
            <h3 className={styles.chartTitle}>AQI Trend Analysis</h3>
            <p className={styles.chartSubtitle}>Aggregated air quality index over selected period.</p>
          </div>
          <div className={styles.legend}>
            <span className={styles.legendPill}>PM2.5</span>
            <span className={styles.legendPill}>CO2</span>
          </div>
        </div>

        <div className={styles.barsGrid}>
          {historyData.map((item) => (
            <div key={item.day} className={styles.barItem}>
              <div
                className={styles.bar}
                style={{ height: `${(item.aqi / maxValue) * 100}%` }}
                title={`${item.day}: ${item.aqi}`}
              />
              <span className={styles.barLabel}>{item.day}</span>
            </div>
          ))}
        </div>
      </article>

      <section>
        <div className={styles.anomalyHeader}>
          <h3 className={styles.anomalyTitle}>Recorded Anomalies</h3>
          <button className={styles.viewLogBtn}>View Full Log</button>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Timestamp</th>
                <th className={styles.th}>Sensor ID</th>
                <th className={styles.th}>PM2.5 (ug/m3)</th>
                <th className={styles.th}>CO2 (ppm)</th>
                <th className={styles.th}>Temp (C)</th>
                <th className={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {anomalies.map((row) => (
                <tr key={`${row.time}-${row.sensorId}`} className={styles.row}>
                  <td className={`${styles.td} ${styles.time}`}>{row.time}</td>
                  <td className={`${styles.td} ${styles.sensor}`}>{row.sensorId}</td>
                  <td className={`${styles.td} ${styles.pm}`}>{row.pm25}</td>
                  <td className={`${styles.td} ${styles.co2}`}>{row.co2}</td>
                  <td className={`${styles.td} ${styles.temp}`}>{row.temperature}</td>
                  <td className={styles.td}>
                    <span className={getStatusClassName(row.status)}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
