import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, KawungCorner, GoldDivider, BATIK_KAWUNG_DARK } from "../lib/shared";

function GiftCard({ gift, delay }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(gift.accountNumber.replace(/-/g, "")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
      style={{
        borderRadius: 20,
        padding: "40px 36px",
        background: `linear-gradient(145deg, rgba(75,31,40,0.55), rgba(42,22,24,0.78))`,
        border: "1px solid rgba(201,164,108,0.22)",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
        maxWidth: 440,
        margin: "0 auto",
      }}
      whileHover={{ y: -5, boxShadow: "0 18px 50px rgba(201,164,108,0.16)" }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: "radial-gradient(circle at top right, rgba(201,164,108,0.1), transparent)", borderRadius: "0 20px 0 0" }} />

      <div style={{ fontSize: 36, marginBottom: 16, textAlign: "center" }}>{gift.icon}</div>

      <p style={{ fontFamily: fonts.ui, fontSize: 9, letterSpacing: "0.45em", color: colors.gold, textTransform: "uppercase", textAlign: "center", marginBottom: 18, opacity: 0.8 }}>
        {gift.type}
      </p>

      <h3 style={{ fontFamily: fonts.heading, fontSize: 24, color: colors.gold, fontWeight: 600, marginBottom: 20, textAlign: "center" }}>{gift.bank}</h3>

      <div style={{ height: 1, background: "rgba(201,164,108,0.18)", marginBottom: 20 }} />

      <div style={{ marginBottom: 12 }}>
        <p style={{ fontFamily: fonts.ui, fontSize: 9, letterSpacing: "0.3em", color: colors.cream, opacity: 0.42, textTransform: "uppercase", marginBottom: 5 }}>Nama Rekening</p>
        <p style={{ fontFamily: fonts.body, fontSize: 17, color: colors.cream, opacity: 0.88 }}>{gift.accountName}</p>
      </div>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontFamily: fonts.ui, fontSize: 9, letterSpacing: "0.3em", color: colors.cream, opacity: 0.42, textTransform: "uppercase", marginBottom: 5 }}>Nomor Rekening</p>
        <p style={{ fontFamily: fonts.heading, fontSize: "clamp(22px,4vw,28px)", color: colors.cream, fontWeight: 600, letterSpacing: "0.06em" }}>{gift.accountNumber}</p>
      </div>

      <motion.button
        onClick={handleCopy}
        style={{
          width: "100%",
          padding: "13px",
          borderRadius: 10,
          background: copied ? "rgba(201,164,108,0.28)" : "rgba(201,164,108,0.12)",
          border: "1px solid rgba(201,164,108,0.38)",
          color: colors.gold,
          fontFamily: fonts.ui,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          transition: "background 0.25s",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {copied ? <><Check size={13} /> Tersalin!</> : <><Copy size={13} /> Salin Nomor</>}
      </motion.button>
    </motion.div>
  );
}

export default function WeddingGift() {
  return (
    <section
      id="wedding-gift"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: sectionBg.maroonGlow,
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_DARK, backgroundSize: "80px 80px" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(201,164,108,0.07) 0%, transparent 70%)" }} />

      <div style={{ position: "absolute", top: 14, left: 14 }}><KawungCorner size={65} /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} /></div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader pre="Wedding Gift" title="Hadiah Pernikahan" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2.2vw,17px)", color: colors.cream, opacity: 0.68, textAlign: "center", maxWidth: 500, margin: "0 auto 16px", lineHeight: 1.85, fontStyle: "italic" }}
        >
          Doa restu Anda merupakan hadiah terindah bagi kami.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(13px,2vw,15px)", color: colors.cream, opacity: 0.55, textAlign: "center", maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.75 }}
        >
          Namun apabila keluarga dan sahabat ingin memberikan tanda kasih, dapat melalui:
        </motion.p>

        <GiftCard
          gift={{
            icon: "🏦",
            type: "Transfer Bank",
            bank: "Bank BCA",
            accountNumber: "7391383778",
            accountName: "Tri Andini",
          }}
          delay={0}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ fontFamily: fonts.body, fontSize: 14, color: colors.cream, opacity: 0.5, textAlign: "center", marginTop: 36, lineHeight: 1.75, fontStyle: "italic" }}
        >
          Terima kasih atas doa, dukungan, dan perhatian yang diberikan kepada kami.
        </motion.p>
      </div>
    </section>
  );
}
