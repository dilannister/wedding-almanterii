import { motion } from "framer-motion";
import { fonts, colors } from "./fonts";

// GoldDivider ornament
export function GoldDivider({ light = false }) {
  const c = light ? colors.maroon : colors.gold;
  const fade = light ? "rgba(75,31,40," : "rgba(201,164,108,";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${c})` }} />
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="M10 0L11.8 6.5H18.5L13.1 10.5L15 17L10 13L5 17L6.9 10.5L1.5 6.5H8.2Z" fill={c} />
      </svg>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${c}, transparent)` }} />
    </div>
  );
}

// Kawung corner ornament SVG
export function KawungCorner({ size = 60, flip = false, light = false }) {
  const stroke = light ? "rgba(75,31,40,0.2)" : "rgba(201,164,108,0.25)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <ellipse cx="15" cy="30" rx="13" ry="18" stroke={stroke} strokeWidth="1" fill="none" />
      <ellipse cx="30" cy="15" rx="18" ry="13" stroke={stroke} strokeWidth="1" fill="none" />
      <ellipse cx="15" cy="15" rx="9" ry="9" stroke={stroke} strokeWidth="0.8" fill="none" />
      <circle cx="15" cy="15" r="3" fill={stroke} />
    </svg>
  );
}

// Gunungan mini ornament
export function GununganSmall({ light = false }) {
  const stroke = light ? "rgba(75,31,40,0.45)" : "rgba(201,164,108,0.5)";
  const fill = light ? "rgba(75,31,40,0.03)" : "rgba(201,164,108,0.04)";
  const dot = light ? "rgba(75,31,40,0.35)" : "rgba(201,164,108,0.4)";
  return (
    <svg width="48" height="60" viewBox="0 0 80 100" fill="none">
      <path d="M40 5L73 90H7Z" stroke={stroke} strokeWidth="1.3" fill={fill} />
      <path d="M40 18L63 84H17Z" stroke={stroke} strokeWidth="0.8" fill="none" />
      <circle cx="40" cy="58" r="9" stroke={stroke} strokeWidth="0.8" fill="none" />
      <circle cx="40" cy="58" r="3" fill={dot} />
      <line x1="40" y1="5" x2="40" y2="18" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

// Reusable section header
export function SectionHeader({ pre, title, light = false }) {
  const textColor = light ? colors.maroon : colors.cream;
  const accentColor = light ? colors.maroon : colors.gold;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center", marginBottom: 56 }}
    >
      <p style={{
        fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.5em",
        color: accentColor, textTransform: "uppercase", marginBottom: 14, opacity: light ? 0.7 : 1
      }}>{pre}</p>
      <h2 style={{
        fontFamily: fonts.heading, fontSize: "clamp(28px,5vw,44px)",
        color: textColor, fontWeight: 600, marginBottom: 20
      }}>{title}</h2>
      <GoldDivider light={light} />
    </motion.div>
  );
}

// Batik parang background pattern (SVG data URL)
export const BATIK_KAWUNG_DARK = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='20' cy='40' rx='14' ry='18' stroke='%23C9A46C' stroke-opacity='0.045' stroke-width='1' fill='none'/%3E%3Cellipse cx='60' cy='40' rx='14' ry='18' stroke='%23C9A46C' stroke-opacity='0.045' stroke-width='1' fill='none'/%3E%3Cellipse cx='40' cy='20' rx='18' ry='14' stroke='%23C9A46C' stroke-opacity='0.045' stroke-width='1' fill='none'/%3E%3Cellipse cx='40' cy='60' rx='18' ry='14' stroke='%23C9A46C' stroke-opacity='0.045' stroke-width='1' fill='none'/%3E%3Ccircle cx='40' cy='40' r='5' stroke='%23C9A46C' stroke-opacity='0.04' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`;

export const BATIK_KAWUNG_LIGHT = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='20' cy='40' rx='14' ry='18' stroke='%234b1f28' stroke-opacity='0.07' stroke-width='1' fill='none'/%3E%3Cellipse cx='60' cy='40' rx='14' ry='18' stroke='%234b1f28' stroke-opacity='0.07' stroke-width='1' fill='none'/%3E%3Cellipse cx='40' cy='20' rx='18' ry='14' stroke='%234b1f28' stroke-opacity='0.07' stroke-width='1' fill='none'/%3E%3Cellipse cx='40' cy='60' rx='18' ry='14' stroke='%234b1f28' stroke-opacity='0.07' stroke-width='1' fill='none'/%3E%3Ccircle cx='40' cy='40' r='5' stroke='%234b1f28' stroke-opacity='0.05' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`;
