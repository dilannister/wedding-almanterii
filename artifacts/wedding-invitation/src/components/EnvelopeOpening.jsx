import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { fonts, colors } from "../lib/fonts";

const BATIK_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='40' cy='40' r='30' stroke='%23C9A46C' stroke-opacity='0.07' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='20' stroke='%23C9A46C' stroke-opacity='0.05' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='10' stroke='%23C9A46C' stroke-opacity='0.06' stroke-width='1'/%3E%3Ccircle cx='0' cy='0' r='15' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='1'/%3E%3Ccircle cx='80' cy='0' r='15' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='1'/%3E%3Ccircle cx='0' cy='80' r='15' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='1'/%3E%3Ccircle cx='80' cy='80' r='15' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`;

export default function EnvelopeOpening({ onOpen, audioRef }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    // Start music
    if (audioRef?.current) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => {});
    }

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  const panelBase = {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundSize: "80px 80px, cover",
  };

  return (
    <AnimatePresence>
      {!opened ? (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: colors.darkBrown }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 1.0 } }}
        >
          {/* Left Gate Panel */}
          <motion.div
            style={{
              ...panelBase,
              left: 0,
              width: "50%",
              backgroundImage: `${BATIK_PATTERN}, linear-gradient(160deg, ${colors.maroon} 0%, ${colors.darkBrown} 100%)`,
              borderRight: `1px solid rgba(201,164,108,0.15)`,
            }}
            animate={opened ? { x: "-100%", filter: "blur(4px)" } : { x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Inner gold glow edge */}
            <div style={{
              position: "absolute", right: 0, top: 0, bottom: 0, width: 60,
              background: "linear-gradient(90deg, transparent, rgba(201,164,108,0.12))",
            }} />
          </motion.div>

          {/* Right Gate Panel */}
          <motion.div
            style={{
              ...panelBase,
              left: "50%",
              width: "50%",
              backgroundImage: `${BATIK_PATTERN}, linear-gradient(200deg, ${colors.darkBrown} 0%, ${colors.maroon} 100%)`,
              borderLeft: `1px solid rgba(201,164,108,0.15)`,
            }}
            animate={opened ? { x: "100%", filter: "blur(4px)" } : { x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Inner gold glow edge */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 60,
              background: "linear-gradient(270deg, transparent, rgba(201,164,108,0.12))",
            }} />
          </motion.div>

          {/* Gold Seam / Center Line */}
          <motion.div
            style={{
              position: "absolute",
              top: 0, bottom: 0,
              left: "50%",
              width: 2,
              transform: "translateX(-50%)",
              background: "linear-gradient(180deg, transparent 0%, #C9A46C 20%, #F5E9E2 50%, #C9A46C 80%, transparent 100%)",
              boxShadow: "0 0 18px #C9A46C, 0 0 40px rgba(201,164,108,0.5)",
              zIndex: 10,
            }}
            animate={opened ? { opacity: 0, scaleY: 0 } : { opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Center Content */}
          <motion.div
            className="relative z-20 text-center px-6 max-w-sm md:max-w-lg"
            animate={opened ? { opacity: 0, scale: 0.85, y: -20 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Top ornament */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center justify-center mb-5"
            >
              <GununganMini />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: fonts.ui,
                fontSize: 11,
                letterSpacing: "0.45em",
                color: colors.gold,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Undangan Pernikahan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55 }}
              style={{
                fontFamily: fonts.script,
                fontSize: "clamp(52px, 12vw, 88px)",
                color: colors.gold,
                lineHeight: 1.1,
                textShadow: "0 0 30px rgba(201,164,108,0.4)",
                marginBottom: 8,
              }}
            >
              Alman & Terii
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ margin: "20px 0" }}
            >
              <GoldDivider />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                fontFamily: fonts.body,
                fontSize: 15,
                color: colors.cream,
                opacity: 0.78,
                marginBottom: 32,
                letterSpacing: "0.05em",
              }}
            >
              Dengan penuh syukur dan kebahagiaan
            </motion.p>

            <motion.button
              onClick={handleOpen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              style={{
                padding: "14px 42px",
                borderRadius: 9999,
                background: `linear-gradient(135deg, ${colors.gold}, #e8c98a, ${colors.gold})`,
                backgroundSize: "200% auto",
                color: colors.darkBrown,
                fontFamily: fonts.ui,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 25px rgba(201,164,108,0.45)",
              }}
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(201,164,108,0.75)" }}
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

function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold})` }} />
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 0L11.8 6.5H18.5L13.1 10.5L15 17L10 13L5 17L6.9 10.5L1.5 6.5H8.2Z" fill="#C9A46C" />
      </svg>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${colors.gold}, transparent)` }} />
    </div>
  );
}

function GununganMini() {
  return (
    <svg width="60" height="40" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 4 L112 70 L8 70 Z" stroke="#C9A46C" strokeOpacity="0.6" strokeWidth="1.5" fill="none"/>
      <path d="M60 16 L100 64 L20 64 Z" stroke="#C9A46C" strokeOpacity="0.4" strokeWidth="1" fill="none"/>
      <circle cx="60" cy="44" r="8" stroke="#C9A46C" strokeOpacity="0.5" strokeWidth="1" fill="none"/>
      <circle cx="60" cy="44" r="3" fill="#C9A46C" fillOpacity="0.5"/>
      <line x1="60" y1="4" x2="60" y2="16" stroke="#C9A46C" strokeOpacity="0.5" strokeWidth="1"/>
    </svg>
  );
}
