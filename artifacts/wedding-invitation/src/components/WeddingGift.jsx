import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { fonts, colors } from "../lib/fonts";
import { SectionHeader } from "./BrideGroom";

const gifts = [
  {
    icon: "🏦",
    type: "Transfer Bank",
    bank: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Alman Pratama",
  },
  {
    icon: "📱",
    type: "Dompet Digital",
    bank: "GoPay / OVO",
    accountNumber: "0812-3456-7890",
    accountName: "Alman & Terii",
  },
];

function GiftCard({ gift, delay }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(gift.accountNumber).then(() => {
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
        padding: "36px 32px",
        background: `linear-gradient(145deg, rgba(75,31,40,0.5), rgba(42,22,24,0.75))`,
        border: "1px solid rgba(201,164,108,0.22)",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{ y: -5, boxShadow: "0 18px 50px rgba(201,164,108,0.14)" }}
    >
      {/* Corner glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 90, height: 90, background: "radial-gradient(circle at top right, rgba(201,164,108,0.09), transparent)", borderRadius: "0 20px 0 0" }} />

      <div style={{ fontSize: 36, marginBottom: 18 }}>{gift.icon}</div>

      <span style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: 99,
        background: "rgba(201,164,108,0.12)",
        border: "1px solid rgba(201,164,108,0.28)",
        fontFamily: fonts.ui,
        fontSize: 10,
        letterSpacing: "0.25em",
        color: colors.gold,
        textTransform: "uppercase",
        marginBottom: 18,
      }}>
        {gift.type}
      </span>

      <h3 style={{ fontFamily: fonts.heading, fontSize: 22, color: colors.gold, fontWeight: 600, marginBottom: 20 }}>{gift.bank}</h3>

      <div style={{ height: 1, background: "rgba(201,164,108,0.18)", marginBottom: 20 }} />

      <div style={{ marginBottom: 10 }}>
        <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.25em", color: colors.cream, opacity: 0.45, textTransform: "uppercase", marginBottom: 5 }}>Nama Rekening</p>
        <p style={{ fontFamily: fonts.body, fontSize: 16, color: colors.cream, opacity: 0.88 }}>{gift.accountName}</p>
      </div>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.25em", color: colors.cream, opacity: 0.45, textTransform: "uppercase", marginBottom: 5 }}>Nomor Rekening</p>
        <p style={{ fontFamily: fonts.heading, fontSize: 22, color: colors.cream, fontWeight: 600, letterSpacing: "0.08em" }}>{gift.accountNumber}</p>
      </div>

      <motion.button
        onClick={handleCopy}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: 10,
          background: copied ? "rgba(201,164,108,0.28)" : "rgba(201,164,108,0.12)",
          border: "1px solid rgba(201,164,108,0.35)",
          color: colors.gold,
          fontFamily: fonts.ui,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
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
        background: `linear-gradient(180deg, ${colors.darkBrown} 0%, #1a0d10 50%, ${colors.darkBrown} 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 50 5 50Z' stroke='%23C9A46C' stroke-opacity='0.025' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{ position: "relative", maxWidth: 840, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader pre="Wedding Gift" title="Hadiah Pernikahan" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: fonts.body,
            fontSize: 16,
            color: colors.cream,
            opacity: 0.68,
            textAlign: "center",
            maxWidth: 480,
            margin: "0 auto 52px",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          Doa dan kehadiran Anda adalah hadiah terbaik bagi kami. Namun jika Anda ingin memberikan sesuatu, berikut informasinya:
        </motion.p>

        <style>{`@media(min-width:640px){.gift-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
        <div className="gift-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          {gifts.map((g, i) => (
            <GiftCard key={i} gift={g} delay={i * 0.18} />
          ))}
        </div>
      </div>
    </section>
  );
}
