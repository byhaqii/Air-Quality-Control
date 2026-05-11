"use client";

import { useState } from "react";
import { StatCard } from "@/components/ui/stat-card";
import styles from "./dashboard-overview.module.css";

export function DashboardOverview() {
  // Data manual sementara (tanpa Firebase)
  const [airData] = useState({
    aqi: 42,
    pm25: 18.5,
    co2: 420,
    temp: 29.3,
    humidity: 72.1,
    status: "Optimal",
  });

  // Mapping data untuk StatCards
  const stats = [
    { label: "PM 2.5", value: airData.pm25, unit: "µg/m³", trend: "live" },
    { label: "CO2", value: airData.co2, unit: "PPM", trend: "live" },
    { label: "Temperature", value: airData.temp, unit: "°C", trend: "live" },
    { label: "Humidity", value: airData.humidity, unit: "%", trend: "live" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.mainGrid}>
        <article className={styles.indexCard} data-card>
          <p className={styles.indexLabel}>Overall Index</p>
          <h2 className={styles.indexTitle}>Air Quality</h2>

          <div className={styles.indexValueRow}>
            <span className={styles.indexValue}>{airData.aqi}</span>
            <span className={styles.indexUnit}>AQI</span>
          </div>

          <p className={styles.indexDesc}>
            Conditions are currently <b>{airData.status}</b>.
            {airData.aqi < 50
              ? " Minimal health risk for the general population."
              : " Increased risk for sensitive groups."}
          </p>
        </article>

        <article className={styles.chartCard} data-card>
          <h3 className={styles.chartTitle}>PM2.5 Concentration</h3>

          <p className={styles.chartSubtitle}>
            Real-time observation from ESP32 Sensor.
          </p>

          <div className={styles.chartPlaceholderWrap}>
            <div
              className={styles.chartPlaceholder}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              {airData.pm25} µg/m³
            </div>
          </div>
        </article>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {stats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={Number(item.value).toFixed(1)}
            unit={item.unit}
            trend={item.trend}
          />
        ))}
      </div>
    </section>
  );
}