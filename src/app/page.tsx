import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.brand}>Aetheris</h1>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>
              Technology
            </a>
            <a href="#" className={styles.navLink}>
              Sensors
            </a>
            <a href="#" className={styles.navLink}>
              Enterprise
            </a>
          </nav>
        </header>

        <main className={styles.main}>
          <section>
            <p className={styles.status}>
              System Online
            </p>

            <h2 className={styles.heroTitle}>
              Real-Time
              <br />
              <span className={styles.heroAccent}>Air Quality</span>
              <br />
              Monitoring
            </h2>

            <p className={styles.heroDesc}>
              Advanced IoT-based environmental intelligence. Visualize atmospheric data through a
              modern command center built for collaborative cloud projects.
            </p>

            <div className={styles.actions}>
              <Link
                href="/dashboard"
                className={styles.cta}
              >
                View Dashboard
              </Link>
            </div>
          </section>

          <section className={styles.visual}>
            <div className={styles.ringOuter} />
            <div className={styles.ringGlow} />
            <div className={styles.aqiCard}>
              <div className={styles.aqiCenter}>
                <p className={styles.aqiValue}>42</p>
                <p className={styles.aqiLabel}>Current AQI</p>
              </div>
            </div>

            <div className={`${styles.miniCard} ${styles.miniCardTemp}`}>
              <p className={styles.miniLabel}>Temperature</p>
              <p className={styles.miniValue}>22.4 C</p>
            </div>

            <div className={`${styles.miniCard} ${styles.miniCardCo2}`}>
              <p className={styles.miniLabel}>CO2 Levels</p>
              <p className={styles.miniValue}>412 ppm</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
