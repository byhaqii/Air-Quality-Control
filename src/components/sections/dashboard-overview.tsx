"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import { StatCard } from "@/components/ui/stat-card";
import styles from "./dashboard-overview.module.css";

export function DashboardOverview() {
  // 1. State untuk menampung data dari Firebase
  const [airData, setAirData] = useState({
    aqi: 0,
    pm25: 0,
    co2: 0,
    temp: 0,
    humidity: 0,
    status: "Monitoring..."
  });

  useEffect(() => {
    // 2. Hubungkan ke path 'sensor_data' di Firebase
    const sensorRef = ref(db, "sensor_data");

    // 3. Listen perubahan data secara real-time
    const unsubscribe = onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data dari Firebase:", data);
      if (data) {
        setAirData({
          aqi: data.aqi || 0,
          pm25: data.pm25 || 0,
          co2: data.co2 || 0,
          temp: data.temp || 0,
          humidity: data.humidity || 0,
          status: data.aqi < 50 ? "Optimal" : "Warning"
        });
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  // 4. Mapping data untuk StatCards (menggantikan metrics mock)
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
            Conditions are currently **{airData.status}**. 
            {airData.aqi < 50 ? " Minimal health risk for the general population." : " Increased risk for sensitive groups."}
          </p>
        </article>

        <article className={styles.chartCard} data-card>
          <h3 className={styles.chartTitle}>PM2.5 Concentration</h3>
          <p className={styles.chartSubtitle}>Real-time observation from ESP32 Sensor.</p>
          <div className={styles.chartPlaceholderWrap}>
            {/* Visualisasi angka besar sementara menunggu library grafik */}
            <div className={styles.chartPlaceholder} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'}}>
               {airData.pm25} µg/m³
            </div>
          </div>
        </article>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {stats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value.toFixed(1)}
            unit={item.unit}
            trend={item.trend}
          />
        ))}
      </div>
    </section>
  );
}