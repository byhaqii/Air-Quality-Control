import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";
import styles from "./layout.module.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atmospheric Intelligence",
  description: "Cloud-based air quality monitoring dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${jetbrainsMono.variable} ${styles.htmlRoot}`}
      suppressHydrationWarning // <--- Tambahkan ini
    >
      <body className={styles.body}>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
