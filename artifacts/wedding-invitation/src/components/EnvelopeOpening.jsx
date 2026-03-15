import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { fonts, colors } from "../lib/fonts";
import { GoldDivider, GununganSmall, BATIK_KAWUNG_DARK } from "../lib/shared";

function getGuestName() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("tamu") || params.get("to") || "";
  } catch {
    return "";
  }
}

export default function EnvelopeOpening({ onOpen, audioRef }) {
  const [opened, setOpened] = useState(false);
  const [guestName] = useState(getGuestName);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef?.current) {
      audioRef.current.volume = 0.22;
      audioRef.current.play().catch(() => {});
    }
    setTimeout(() => onOpen(), 1200);
  };

  const panelStyle = (side) => ({
    position: "absolute",
    top: 0, bottom: 0,
    width: "50%",
    [side]: 0,
    backgroundImage: `${BATIK_KAWUNG_DARK}, linear-gradient(${side === "left" ? "155deg" : "205deg"}, #4b1f28 0%, #2a1618 60%, #1a0d10 100%)`,
    backgroundSize: "80px 80px, cover",
  });

  return (
    <AnimatePresence>
      {!opened ? (
        <motion.div
          key="gate"
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", backgroundColor: "#1a0d10",
          }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 1.0 } }}
        >
          {/* Left Panel */}
          <motion.div
            style={panelStyle("left")}
            animate={opened ? { x: "-100%", filter: "blur(5px)" } : { x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, transparent, rgba(201,164,108,0.1))" }} />
          </motion.div>

          {/* Right Panel */}
          <motion.div
            style={panelStyle("right")}
            animate={opened ? { x: "100%", filter: "blur(5px)" } : { x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(270deg, transparent, rgba(201,164,108,0.1))" }} />
          </motion.div>

          {/* Gold center seam */}
          <motion.div
            style={{
              position: "absolute", top: 0, bottom: 0, left: "50%",
              width: 2, transform: "translateX(-50%)", zIndex: 10,
              background: `linear-gradient(180deg, transparent 0%, ${colors.gold} 20%, #fff8f0 50%, ${colors.gold} 80%, transparent 100%)`,
              boxShadow: `0 0 20px ${colors.gold}, 0 0 50px rgba(201,164,108,0.45)`,
            }}
            animate={opened ? { opacity: 0, scaleY: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Cover content */}
          <motion.div
            style={{ position: "relative", zIndex: 20, textAlign: "center", padding: "0 28px", maxWidth: 420 }}
            animate={opened ? { opacity: 0, scale: 0.88, y: -16 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gunungan ornament */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
            >
              <GununganSmall />
            </motion.div>

            {/* The Wedding Of */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.5em", color: colors.gold, textTransform: "uppercase", marginBottom: 8 }}
            >
              The Wedding Of
            </motion.p>

            {/* Couple name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                fontFamily: fonts.script,
                fontSize: "clamp(44px, 11vw, 78px)",
                color: colors.gold,
                lineHeight: 1.1,
                textShadow: "0 0 30px rgba(201,164,108,0.4)",
                marginBottom: 8,
              }}
            >
              Alman & Terii
            </motion.h1>

            {/* Date */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ fontFamily: fonts.body, fontSize: 15, color: colors.cream, opacity: 0.75, fontStyle: "italic", marginBottom: 20 }}
            >
              26 April 2026
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              style={{ marginBottom: 20 }}
            >
              <GoldDivider />
            </motion.div>

            {/* Kepada / Guest */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ marginBottom: 28 }}
            >
              <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.3em", color: colors.gold, textTransform: "uppercase", marginBottom: 6, opacity: 0.75 }}>
                Kepada Yth.
              </p>
              <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.cream, opacity: 0.65, marginBottom: 6, fontStyle: "italic" }}>
                Bapak / Ibu / Saudara / i
              </p>
              <p style={{
                fontFamily: fonts.heading,
                fontSize: guestName ? 18 : 14,
                color: colors.cream,
                fontWeight: guestName ? 600 : 400,
                opacity: guestName ? 0.92 : 0.5,
                fontStyle: guestName ? "normal" : "italic",
              }}>
                {guestName || "Tamu Undangan"}
              </p>
            </motion.div>

            {/* Button */}
            <motion.button
              onClick={handleOpen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              style={{
                padding: "14px 44px",
                borderRadius: 9999,
                background: `linear-gradient(135deg, ${colors.gold}, ${colors.goldLight}, ${colors.gold})`,
                color: colors.darkBrown,
                fontFamily: fonts.ui,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 28px rgba(201,164,108,0.45)",
              }}
              whileHover={{ scale: 1.06, boxShadow: "0 0 42px rgba(201,164,108,0.72)" }}
              whileTap={{ scale: 0.97 }}
            >
              Buka Undangan
            </motion.button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
