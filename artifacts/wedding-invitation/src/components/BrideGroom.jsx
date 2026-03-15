import { motion } from "framer-motion";
import { fonts, colors } from "../lib/fonts";

function Profile({ name, born, parents, delay }) {
  const initials = name.charAt(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 24px" }}
    >
      {/* Portrait with glow reveal */}
      <motion.div
        style={{ position: "relative", marginBottom: 28 }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay + 0.2 }}
          style={{
            position: "absolute",
            inset: -10,
            borderRadius: "50%",
            border: `1px solid rgba(201,164,108,0.25)`,
            boxShadow: "0 0 40px rgba(201,164,108,0.15)",
          }}
        />
        {/* Portrait circle */}
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `linear-gradient(145deg, ${colors.maroon}, ${colors.darkBrown})`,
            border: `2px solid ${colors.gold}`,
            boxShadow: `0 0 30px rgba(201,164,108,0.25), inset 0 0 30px rgba(201,164,108,0.06)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: fonts.script, fontSize: 56, color: colors.gold }}>{initials}</span>
        </div>
      </motion.div>

      {/* Name — letter-by-letter */}
      <h3 style={{ fontFamily: fonts.script, fontSize: 44, color: colors.gold, marginBottom: 8, lineHeight: 1 }}>
        {name.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.4 + i * 0.06 }}
            style={{ display: "inline-block" }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </h3>

      <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.cream, opacity: 0.65, marginBottom: 16, letterSpacing: "0.04em" }}>
        {born}
      </p>

      <div style={{ width: 40, height: 1, background: colors.gold, opacity: 0.45, margin: "0 auto 16px" }} />

      <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.35em", color: colors.gold, opacity: 0.65, textTransform: "uppercase", marginBottom: 8 }}>
        Putra/Putri dari
      </p>
      <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.cream, opacity: 0.82, lineHeight: 1.5 }}>
        {parents}
      </p>
    </motion.div>
  );
}

function SectionHeader({ pre, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center", marginBottom: 60 }}
    >
      <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.5em", color: colors.gold, textTransform: "uppercase", marginBottom: 14 }}>{pre}</p>
      <h2 style={{ fontFamily: fonts.heading, fontSize: "clamp(30px,5vw,46px)", color: colors.cream, fontWeight: 500 }}>{title}</h2>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 20 }}>
        <div style={{ height: 1, width: 70, background: `linear-gradient(90deg, transparent, ${colors.gold})` }} />
        <div style={{ width: 6, height: 6, background: colors.gold, transform: "rotate(45deg)" }} />
        <div style={{ height: 1, width: 70, background: `linear-gradient(90deg, ${colors.gold}, transparent)` }} />
      </div>
    </motion.div>
  );
}

export { SectionHeader };

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${colors.darkBrown} 0%, #1a0d10 50%, ${colors.darkBrown} 100%)`,
      }}
    >
      {/* Subtle batik BG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' stroke='%23C9A46C' stroke-opacity='0.03' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader pre="Mempelai" title="Mempelai Pria & Wanita" />

        {/* Profiles frame */}
        <div
          style={{
            border: `1px solid rgba(201,164,108,0.18)`,
            borderRadius: 20,
            padding: "52px 20px",
            background: "rgba(75,31,40,0.18)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 48,
          }}
        >
          {/* Desktop: row; mobile: column via CSS */}
          <style>{`
            @media (min-width: 768px) {
              .profiles-row { flex-direction: row !important; gap: 0 !important; }
            }
          `}</style>
          <div className="profiles-row" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48, width: "100%" }}>
            <Profile name="Alman" born="Surakarta, 14 Maret 1996" parents="Bapak Suharto & Ibu Sumarni" delay={0} />

            {/* Divider */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={{ width: 1, height: 60, background: `linear-gradient(180deg, transparent, ${colors.gold})` }} />
              <span style={{ fontFamily: fonts.script, fontSize: 36, color: colors.gold, lineHeight: 1 }}>&</span>
              <div style={{ width: 1, height: 60, background: `linear-gradient(180deg, ${colors.gold}, transparent)` }} />
            </div>

            <Profile name="Terii" born="Yogyakarta, 22 Agustus 1997" parents="Bapak Widodo & Ibu Sriyaningsih" delay={0.25} />
          </div>
        </div>
      </div>
    </section>
  );
}
