"use client";

import { useState } from "react";
import { StatCard } from "@/components/ui/stat-card";
import styles from "./dashboard-overview.module.css";

export function DashboardOverview() {
  // Data demo ideal
  const [airData] = useState({
    aqi: 38,
    lpg: 12.4,
    co: 410,
    temp: 27.6,
    humidity: 61.3,
    status: "Safe",
  });

  // Function status tiap sensor
  const getSensorStatus = (
    type: string,
    value: number
  ): {
    label: string;
    className: string;
  } => {
    switch (type) {
      case "lpg":
        if (value < 20)
          return {
            label: "Safe",
            className: styles.safe,
          };

        if (value < 40)
          return {
            label: "Warning",
            className: styles.warning,
          };

        return {
          label: "Danger",
          className: styles.danger,
        };

      case "co":
        if (value < 600)
          return {
            label: "Safe",
            className: styles.safe,
          };

        if (value < 1000)
          return {
            label: "Warning",
            className: styles.warning,
          };

        return {
          label: "Danger",
          className: styles.danger,
        };

      case "temp":
        if (value >= 24 && value <= 30)
          return {
            label: "Safe",
            className: styles.safe,
          };

        if (value > 30 && value <= 35)
          return {
            label: "Warning",
            className: styles.warning,
          };

        return {
          label: "Danger",
          className: styles.danger,
        };

      case "humidity":
        if (value >= 40 && value <= 70)
          return {
            label: "Safe",
            className: styles.safe,
          };

        if (
          (value > 70 && value <= 80) ||
          (value >= 30 && value < 40)
        )
          return {
            label: "Warning",
            className: styles.warning,
          };

        return {
          label: "Danger",
          className: styles.danger,
        };

      default:
        return {
          label: "Safe",
          className: styles.safe,
        };
    }
  };

  const stats = [
    {
      label: "LPG",
      value: airData.lpg,
      unit: "PPM",
      trend: "live",
      type: "lpg",
    },
    {
      label: "CO",
      value: airData.co,
      unit: "PPM",
      trend: "live",
      type: "co",
    },
    {
      label: "Temperature",
      value: airData.temp,
      unit: "°C",
      trend: "live",
      type: "temp",
    },
    {
      label: "Humidity",
      value: airData.humidity,
      unit: "%",
      trend: "live",
      type: "humidity",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.mainGrid}>
        {/* AIR QUALITY CARD */}
        <article className={styles.indexCard} data-card>
          <p className={styles.indexLabel}>Overall Index</p>

          <h2 className={styles.indexTitle}>
            Air Quality
          </h2>

          <div className={styles.indexValueRow}>
            <span className={styles.indexValue}>
              {airData.aqi}
            </span>

            <span className={styles.indexUnit}>
              AQI
            </span>
          </div>

          <div
            className={`${styles.statusBadge} ${styles.safe}`}
          >
            {airData.status}
          </div>

          <p className={styles.indexDesc}>
            Air quality is currently excellent and
            healthy for daily activities.
          </p>
        </article>

        {/* MAIN CHART */}
        <article className={styles.chartCard} data-card>
          <div className={styles.chartHeader}>
            <div>
              <h3 className={styles.chartTitle}>
                MQ2 PPM
              </h3>

              <p className={styles.chartSubtitle}>
                Real-time observation from ESP32
                Sensor.
              </p>
            </div>

            <div
              className={`${styles.statusBadge} ${styles.safe}`}
            >
              Safe
            </div>
          </div>

          <div className={styles.chartPlaceholderWrap}>
            <div className={styles.chartPlaceholder}>
              {airData.lpg} ppm
            </div>
          </div>
        </article>
      </div>

      {/* SENSOR CARDS */}
      <div className={styles.statsGrid}>
        {stats.map((item) => {
          const status = getSensorStatus(
            item.type,
            Number(item.value)
          );

          return (
            <div
              key={item.label}
              className={styles.sensorCard}
            >
              <div className={styles.sensorHeader}>
                <h4>{item.label}</h4>

                <span
                  className={`${styles.statusBadge} ${status.className}`}
                >
                  {status.label}
                </span>
              </div>

              <StatCard
                label={item.label}
                value={Number(item.value).toFixed(1)}
                unit={item.unit}
                trend={item.trend}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}