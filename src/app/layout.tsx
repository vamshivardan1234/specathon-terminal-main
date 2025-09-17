"use client";
import "./globals.css";
import HackerBackground from "../../components/HackerBackground";
import { ReactNode, useEffect, useRef } from "react";

const metadata = {
  title: "Specathon Terminal",
  description: "Invitation to Specathon",
  favicon: "/public/logo.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    // Always start muted to avoid autoplay block
    audioEl.muted = true;

    // Try playing muted first
    audioEl.play().catch(() => {
      console.log("Autoplay with sound blocked, waiting for user interaction...");
    });

    // Function to unmute and play on first interaction
    const enableSound = () => {
      if (audioEl) {
        audioEl.muted = false;
        audioEl.play();
      }
      // Remove listener after first interaction
      document.removeEventListener("click", enableSound);
      document.removeEventListener("keydown", enableSound);
      document.removeEventListener("scroll", enableSound);
    };

    // Listen for *any* user interaction
    document.addEventListener("click", enableSound);
    document.addEventListener("keydown", enableSound);
    document.addEventListener("scroll", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("keydown", enableSound);
      document.removeEventListener("scroll", enableSound);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <HackerBackground />
        <main>{children}</main>

        {/* Logo Watermark */}
        <img
          src="/logo.png"
          alt="Club Logo Watermark"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "100px",
            opacity: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 9999,
          }}
        />

        {/* ✅ Audio with autoplay + muted (will unmute after first click) */}
        <audio ref={audioRef} autoPlay loop muted>
          <source src="/sdtrk.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </body>
    </html>
  );
}
