"use client";

import { useState, type FormEvent } from "react";
import { LoginGlowField } from "@/components/ui/login-glow-field";
import styles from "../page.module.css";

export default function LoginPage() {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Authentication is disabled in this project.");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Authentication is disabled in this project.");
  };

  const handleRequestAccess = async () => {
    setMessage("Request Access is disabled in this project.");
  };

  return (
    <main className={styles.root}>
      <div className={styles.gridOverlay} />
      <LoginGlowField />

      <section className={styles.loginShell}>
        <header className={styles.brandWrap}>
          <div className={styles.logo}>◉</div>
          <h1 className={styles.brand}>Atmospheric</h1>
          <p className={styles.subtitle}>Air Quality Control</p>
        </header>

        <article className={styles.card} data-card>
          <h2 className={styles.cardTitle}>Login Page</h2>

          <p className={styles.configNotice}>Authentication has been removed from this project.</p>

          <form className={styles.form} onSubmit={handleLogin}>
            <label className={styles.label} htmlFor="identity">ID</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>◈</span>
              <input
                id="identity"
                className={styles.input}
                type="email"
                placeholder="Username or Email"
                autoComplete="username"
                value={identity}
                onChange={(event) => setIdentity(event.target.value)}
                disabled
              />
            </div>

            <div className={styles.passRow}>
              <label className={styles.label} htmlFor="passphrase">Password</label>
              <a href="#" className={styles.helpLink}>Forgot?</a>
            </div>

            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>▣</span>
              <input
                id="passphrase"
                className={styles.input}
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled
              />
              <span className={styles.eyeIcon}>◌</span>
            </div>

            <button type="submit" className={styles.submitBtn} disabled>
              Login Disabled
            </button>

            {message ? <p className={styles.formMessage}>{message}</p> : null}
          </form>

          <footer className={styles.cardFooter}>
            <span>No active clearance?</span>
            <button type="button" className={styles.footerLinkButton} onClick={handleRequestAccess}>
              Request Access
            </button>
          </footer>
        </article>
      </section>
    </main>
  );
}
