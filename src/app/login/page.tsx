"use client";

import { useState, type FormEvent } from "react";
import { auth } from "@/lib/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { useRouter } from "next/navigation"; 
import { LoginGlowField } from "@/components/ui/login-glow-field";
import styles from "../page.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState(""); // Menggunakan username
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    // Trick: Mengubah username menjadi format email internal
    const internalEmail = `${username.toLowerCase()}@atmospheric.com`;

    try {
      await signInWithEmailAndPassword(auth, internalEmail, password);
      setMessage("Access Granted. Redirecting...");
      
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
      
    } catch (error: any) {
      console.error("Login Error:", error.code);
      if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found") {
        setMessage("Invalid Username or Passphrase.");
      } else {
        setMessage("Connection failed. Check your network.");
      }
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
                type="text" // Ubah jadi text, bukan email
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

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={loading}
            >
              {loading ? "Verifying..." : "Establish Secure Link"}
            </button>

            {message ? <p className={styles.formMessage} style={{color: message.includes('Granted') ? '#00ff00' : '#ff4444'}}>{message}</p> : null}
          </form>

          <footer className={styles.cardFooter}>
            <span>No clearance level?</span>
            <button type="button" className={styles.footerLinkButton}>
              Request Access
            </button>
          </footer>
        </article>
      </section>
    </main>
  );
}