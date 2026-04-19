"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./login-glow-field.module.css";

type Glow = {
  id: number;
  x: number;
  y: number;
  size: number;
  durationMs: number;
  peakOpacity: number;
};

const MAX_GLOWS = 16;
const SPAWN_INTERVAL_MS = 420;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function LoginGlowField() {
  const [glows, setGlows] = useState<Glow[]>([]);
  const nextIdRef = useRef(1);

  useEffect(() => {
    let disposed = false;
    const timeouts = new Set<number>();

    const spawnGlow = () => {
      if (disposed) {
        return;
      }

      const id = nextIdRef.current;
      nextIdRef.current += 1;

      const glow: Glow = {
        id,
        x: randomBetween(4, 96),
        y: randomBetween(4, 86),
        size: randomBetween(9, 30),
        durationMs: randomBetween(2200, 6200),
        peakOpacity: randomBetween(0.35, 0.95),
      };

      setGlows((current) => {
        const next = [...current, glow];
        if (next.length > MAX_GLOWS) {
          return next.slice(next.length - MAX_GLOWS);
        }
        return next;
      });

      const removeTimer = window.setTimeout(() => {
        setGlows((current) => current.filter((item) => item.id !== id));
        timeouts.delete(removeTimer);
      }, glow.durationMs + 120);

      timeouts.add(removeTimer);
    };

    // Seed a few glows so the effect is visible immediately.
    for (let i = 0; i < 7; i += 1) {
      const seedTimer = window.setTimeout(spawnGlow, i * 120);
      timeouts.add(seedTimer);
    }

    const intervalId = window.setInterval(spawnGlow, SPAWN_INTERVAL_MS);

    return () => {
      disposed = true;
      window.clearInterval(intervalId);
      for (const timer of timeouts) {
        window.clearTimeout(timer);
      }
      timeouts.clear();
    };
  }, []);

  return (
    <div className={styles.field} aria-hidden="true">
      {glows.map((glow) => (
        <span
          key={glow.id}
          className={styles.glow}
          style={{
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            width: `${glow.size}rem`,
            height: `${glow.size}rem`,
            animationDuration: `${glow.durationMs}ms`,
            ["--peak-opacity" as string]: String(glow.peakOpacity),
          }}
        />
      ))}
    </div>
  );
}
