import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fonts, colors } from "../lib/fonts";

function FloatingParticle({ x, y, size, delay }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${colors.gold}, transparent)`,
      }}
      animate={{
        opacity: [0, 0.7, 0],
        scale: [0.5, 1.8, 0.5],
        y: [0, -28, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: 5 + (i * 6.2) % 90,
  y: 10 + (i * 5.3) % 80,
  size: 2 + (i % 3),
  delay: i * 0.4,
}));

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNext = () => {
    document.getElementById("bride-groom")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: `linear-gradient(180deg, #1a0d10 0%, ${colors.darkBrown} 40%, ${colors.maroon} 70%, ${colors.darkBrown} 100%)`,
      }}
    >
      {/* Parallax batik BG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateY(${scrollY * 0.28}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='45' cy='45' r='35' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='1' fill='none'/%3E%3Ccircle cx='45' cy='45' r='22' stroke='%23C9A46C' stroke-opacity='0.03' stroke-width='1' fill='none'/%3E%3Ccircle cx='45' cy='45' r='9' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='1' fill='none'/%3E%3Ccircle cx='0' cy='0' r='18' stroke='%23C9A46C' stroke-opacity='0.025' stroke-width='1' fill='none'/%3E%3Ccircle cx='90' cy='0' r='18' stroke='%23C9A46C' stroke-opacity='0.025' stroke-width='1' fill='none'/%3E%3Ccircle cx='0' cy='90' r='18' stroke='%23C9A46C' stroke-opacity='0.025' stroke-width='1' fill='none'/%3E%3Ccircle cx='90' cy='90' r='18' stroke='%23C9A46C' stroke-opacity='0.025' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Radial gold glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 55% 45% at 50% 52%, rgba(201,164,108,0.11) 0%, transparent 72%)",
        }}
      />

      {/* Particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {particles.map((p) => (
          <FloatingParticle key={p.id} {...p} />
        ))}
      </div>

      {/* Top / bottom gold lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 20px", maxWidth: 760, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontFamily: fonts.ui,
            fontSize: 11,
            letterSpacing: "0.45em",
            color: colors.gold,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          The Wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.82, y: 44 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.45, ease: [0.21, 1.02, 0.73, 1.02] }}
          style={{
            fontFamily: fonts.script,
            fontSize: "clamp(64px, 14vw, 130px)",
            color: colors.gold,
            lineHeight: 1.1,
            marginBottom: 12,
            textShadow: `0 0 35px rgba(201,164,108,0.45), 0 0 70px rgba(201,164,108,0.18)`,
          }}
        >
          Alman & Terii
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          style={{ margin: "24px auto", maxWidth: 320 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold})` }} />
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 0L11.8 6.5H18.5L13.1 10.5L15 17L10 13L5 17L6.9 10.5L1.5 6.5H8.2Z" fill="#C9A46C"/></svg>
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${colors.gold}, transparent)` }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          style={{ fontFamily: fonts.body, fontSize: 18, color: colors.cream, opacity: 0.82, marginBottom: 8, fontStyle: "italic" }}
        >
          Sabtu, 12 April 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{ fontFamily: fonts.ui, fontSize: 11, letterSpacing: "0.2em", color: colors.gold, marginBottom: 44, textTransform: "uppercase" }}
        >
          Pura Mangkunegaran, Surakarta
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          style={{
            padding: "14px 42px",
            borderRadius: 9999,
            border: `1px solid ${colors.gold}`,
            background: "transparent",
            color: colors.gold,
            fontFamily: fonts.ui,
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(201,164,108,0.12)", boxShadow: "0 0 30px rgba(201,164,108,0.35)" }}
          whileTap={{ scale: 0.97 }}
        >
          Lihat Undangan
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ width: 1, height: 48, background: `linear-gradient(180deg, ${colors.gold}, transparent)` }} />
      </motion.div>
    </section>
  );
}
