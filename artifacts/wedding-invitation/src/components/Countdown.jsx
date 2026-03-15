import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fonts, colors } from "../lib/fonts";
import { SectionHeader } from "./BrideGroom";

const TARGET = new Date("2025-04-12T08:00:00");

function getDiff() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function CountBox({ value, label, delay }) {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      initial={{ opacity: 0, y: 36, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
    >
      <div
        style={{
          width: "clamp(72px,16vw,110px)",
          height: "clamp(72px,16vw,110px)",
          borderRadius: 14,
          background: `linear-gradient(145deg, rgba(75,31,40,0.75), rgba(42,22,24,0.6))`,
          border: `1px solid rgba(201,164,108,0.28)`,
          boxShadow: "inset 0 0 20px rgba(201,164,108,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,164,108,0.08), transparent 70%)" }} />
        <span
          style={{
            fontFamily: fonts.heading,
            fontSize: "clamp(28px,7vw,48px)",
            fontWeight: 700,
            color: colors.gold,
            textShadow: "0 0 18px rgba(201,164,108,0.45)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p style={{ marginTop: 12, fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.3em", color: colors.cream, opacity: 0.6, textTransform: "uppercase" }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getDiff());
  useEffect(() => {
    const t = setInterval(() => setTime(getDiff()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="countdown"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${colors.darkBrown} 0%, ${colors.maroon} 50%, ${colors.darkBrown} 100%)`,
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 75% 55% at 50% 50%, rgba(201,164,108,0.07), transparent 70%)" }} />

      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader pre="Menghitung Hari" title="Hitung Mundur" />

        {/* Quran verse with blur fade */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          style={{
            textAlign: "center",
            marginBottom: 52,
            padding: "28px 32px",
            borderRadius: 16,
            background: "rgba(75,31,40,0.25)",
            border: "1px solid rgba(201,164,108,0.15)",
          }}
        >
          <p style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2.2vw,17px)", color: colors.cream, opacity: 0.82, fontStyle: "italic", lineHeight: 1.75, marginBottom: 12 }}>
            "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
          </p>
          <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.3em", color: colors.gold, textTransform: "uppercase" }}>Q.S. Ar-Rum: 21</p>
        </motion.div>

        {/* Countdown boxes */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(8px,2vw,24px)", flexWrap: "wrap" }}>
          {[
            { value: time.days, label: "Hari", delay: 0 },
            { value: time.hours, label: "Jam", delay: 0.1 },
            { value: time.minutes, label: "Menit", delay: 0.2 },
            { value: time.seconds, label: "Detik", delay: 0.3 },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(8px,2vw,24px)" }}>
              <CountBox {...item} />
              {i < 3 && (
                <motion.span
                  style={{ fontFamily: fonts.heading, fontSize: "clamp(24px,5vw,38px)", color: colors.gold, marginBottom: 32 }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                >
                  :
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
