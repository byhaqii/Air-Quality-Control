"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation"; 
import { LoginGlowField } from "@/components/ui/login-glow-field";
import styles from "../page.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Menghubungkan ke API Route Next.js
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Access Granted. Welcome ${data.role}!`);
        
        // Simpan Role ke LocalStorage untuk pengecekan di Dashboard nanti
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userName", data.username);

        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        setMessage(data.error || "Access Denied.");
      }
    } catch (error) {
      setMessage("System Offline. Check Connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.root}>
      <div className={styles.gridOverlay} />
      <LoginGlowField />

      <section className={styles.loginShell}>
        <header className={styles.brandWrap}>
          <div className={styles.logo}>◉</div>
          <h1 className={styles.brand}>Atmospheric</h1>
          <p className={styles.subtitle}>Air Quality Control System</p>
        </header>

        <article className={styles.card} data-card>
          <h2 className={styles.cardTitle}>Terminal Login</h2>

          <form className={styles.form} onSubmit={handleLogin}>
            <label className={styles.label} htmlFor="username">Operator Username</label>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>◈</span>
              <input
                id="username"
                className={styles.input}
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className={styles.passRow}>
              <label className={styles.label} htmlFor="passphrase">Passphrase</label>
              <a href="#" className={styles.helpLink}>Recovery?</a>
            </div>

            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>▣</span>
              <input
                id="passphrase"
                className={styles.input}
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Verifying Identity..." : "Establish Secure Link"}
            </button>

            {message && (
              <p className={styles.formMessage} style={{ color: message.includes('Granted') ? '#00ff00' : '#ff4444' }}>
                {message}
              </p>
            )}
          </form>

          <footer className={styles.cardFooter}>
            <span>No clearance level?</span>
            <button type="button" className={styles.footerLinkButton}>Request Access</button>
          </footer>
        </article>
      </section>
    </main>
  );
}