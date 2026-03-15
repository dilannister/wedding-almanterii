import { motion } from "framer-motion";

// Kawung batik motif (four overlapping circles)
function KawungMotif({ size = 40 }) {
  const r = size * 0.28;
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <ellipse cx={c} cy={c - r} rx={r * 0.7} ry={r} stroke="#C9A46C" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
      <ellipse cx={c} cy={c + r} rx={r * 0.7} ry={r} stroke="#C9A46C" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
      <ellipse cx={c - r} cy={c} rx={r} ry={r * 0.7} stroke="#C9A46C" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
      <ellipse cx={c + r} cy={c} rx={r} ry={r * 0.7} stroke="#C9A46C" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
      <circle cx={c} cy={c} r={r * 0.3} fill="#C9A46C" fillOpacity="0.4" />
    </svg>
  );
}

// Parang batik motif (diagonal slash shape)
function ParangMotif({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path d="M10 50 Q30 10 50 10" stroke="#C9A46C" strokeOpacity="0.65" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M5 40 Q25 5 45 5" stroke="#C9A46C" strokeOpacity="0.35" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M15 55 Q35 15 55 15" stroke="#C9A46C" strokeOpacity="0.35" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="3" fill="#C9A46C" fillOpacity="0.5"/>
    </svg>
  );
}

// Mini Gunungan (wayang shadow puppet shape)
function GununganMotif({ size = 44 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 60 84" fill="none">
      <path d="M30 4 L56 72 L4 72 Z" stroke="#C9A46C" strokeOpacity="0.6" strokeWidth="1.2" fill="rgba(201,164,108,0.04)"/>
      <path d="M30 14 L50 66 L10 66 Z" stroke="#C9A46C" strokeOpacity="0.35" strokeWidth="0.8" fill="none"/>
      <circle cx="30" cy="46" r="7" stroke="#C9A46C" strokeOpacity="0.5" strokeWidth="0.8" fill="none"/>
      <circle cx="30" cy="46" r="2.5" fill="#C9A46C" fillOpacity="0.45"/>
      <line x1="30" y1="4" x2="30" y2="14" stroke="#C9A46C" strokeOpacity="0.5" strokeWidth="1"/>
      <line x1="30" y1="72" x2="30" y2="80" stroke="#C9A46C" strokeOpacity="0.4" strokeWidth="1"/>
    </svg>
  );
}

const ORNAMENTS = [
  { Component: KawungMotif, size: 38 },
  { Component: ParangMotif, size: 34 },
  { Component: GununganMotif, size: 32 },
  { Component: KawungMotif, size: 44 },
  { Component: ParangMotif, size: 40 },
  { Component: GununganMotif, size: 36 },
  { Component: KawungMotif, size: 30 },
  { Component: ParangMotif, size: 38 },
  { Component: GununganMotif, size: 28 },
  { Component: KawungMotif, size: 42 },
];

const instances = ORNAMENTS.map((o, i) => ({
  ...o,
  id: i,
  x: 5 + (i * 9.5) % 90,
  delay: i * 1.8,
  duration: 14 + (i % 5) * 4,
  driftX: (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 8),
  rotateEnd: (i % 2 === 0 ? 1 : -1) * (20 + (i % 3) * 15),
  startY: -5 - (i % 3) * 10,
}));

export default function JavaneseOrnaments() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 40,
        overflow: "hidden",
      }}
    >
      {instances.map((item) => {
        const { Component, id, x, delay, duration, driftX, rotateEnd, size, startY } = item;
        return (
          <motion.div
            key={id}
            style={{
              position: "absolute",
              left: `${x}vw`,
              top: `${startY}vh`,
              filter: "drop-shadow(0 0 6px rgba(201,164,108,0.35))",
            }}
            animate={{
              y: ["0vh", "108vh"],
              x: [0, driftX, -driftX / 2, driftX / 3],
              rotate: [0, rotateEnd],
              opacity: [0, 0.65, 0.65, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.85, 1],
            }}
          >
            <Component size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}
