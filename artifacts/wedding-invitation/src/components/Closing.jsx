import { motion } from "framer-motion";
import { fonts, colors } from "../lib/fonts";

export default function Closing() {
  return (
    <section
      id="closing"
      style={{
        position: "relative",
        padding: "120px 0 100px",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${colors.darkBrown} 0%, #1a0d10 50%, ${colors.darkBrown} 100%)`,
        textAlign: "center",
      }}
    >
      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(201,164,108,0.09), transparent 70%)" }} />

      {/* Top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
        {/* Mini gunungan ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}
        >
          <svg width="64" height="80" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 8 L108 130 L12 130 Z" stroke="#C9A46C" strokeOpacity="0.5" strokeWidth="1.5" fill="rgba(201,164,108,0.03)"/>
            <path d="M60 22 L96 122 L24 122 Z" stroke="#C9A46C" strokeOpacity="0.3" strokeWidth="1" fill="none"/>
            <circle cx="60" cy="82" r="12" stroke="#C9A46C" strokeOpacity="0.45" strokeWidth="1" fill="none"/>
            <circle cx="60" cy="82" r="4" fill="#C9A46C" fillOpacity="0.4"/>
            <line x1="60" y1="8" x2="60" y2="22" stroke="#C9A46C" strokeOpacity="0.45" strokeWidth="1.2"/>
          </svg>
        </motion.div>

        {/* Quote — slow fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p style={{
            fontFamily: fonts.heading,
            fontSize: "clamp(32px,6vw,46px)",
            color: colors.gold,
            fontStyle: "italic",
            lineHeight: 1.1,
            marginBottom: 4,
          }}>
            "
          </p>

          <p style={{
            fontFamily: fonts.body,
            fontSize: "clamp(15px,2.2vw,18px)",
            color: colors.cream,
            opacity: 0.82,
            fontStyle: "italic",
            lineHeight: 1.85,
            marginBottom: 16,
          }}>
            Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
          </p>

          <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.35em", color: colors.gold, textTransform: "uppercase", marginBottom: 52 }}>
            Q.S. Ar-Rum: 21
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}
        >
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold})` }} />
          <div style={{ display: "flex", gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: colors.gold }} />
            ))}
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${colors.gold}, transparent)` }} />
        </motion.div>

        {/* Names — slow fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.21, 1.02, 0.73, 1.02] }}
        >
          <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.45em", color: colors.cream, opacity: 0.55, textTransform: "uppercase", marginBottom: 12 }}>
            Dengan Penuh Cinta
          </p>

          <h2 style={{
            fontFamily: fonts.script,
            fontSize: "clamp(52px,13vw,96px)",
            color: colors.gold,
            lineHeight: 1.1,
            textShadow: `0 0 40px rgba(201,164,108,0.4), 0 0 80px rgba(201,164,108,0.18)`,
            marginBottom: 16,
          }}>
            Alman & Terii
          </h2>

          <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.cream, opacity: 0.48, letterSpacing: "0.1em" }}>
            12 April 2025
          </p>
        </motion.div>

        {/* Floating stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 60 }}
        >
          {["✦", "✧", "✦"].map((s, i) => (
            <motion.span
              key={i}
              style={{ fontSize: 18, color: colors.gold, opacity: 0.7 }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom line */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
    </section>
  );
}
