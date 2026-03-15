import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, KawungCorner, BATIK_KAWUNG_DARK } from "../lib/shared";

const events = [
  {
    icon: "🕌",
    title: "Akad Nikah",
    subtitle: "Ijab Kabul",
    date: "Minggu, 26 April 2026",
    time: "09.00 WIB",
    address: "JL Al-Innayah Karang Ampel RT003/RW004 No.15\nKp Rawa Kalong\nDesa Karang Satria\nKecamatan Tambun Utara\nKabupaten Bekasi",
    mapsQuery: "Kp+Rawa+Kalong+Desa+Karang+Satria+Tambun+Utara+Bekasi",
    slideFrom: "left",
  },
  {
    icon: "🌹",
    title: "Resepsi Pernikahan",
    subtitle: "Wedding Reception",
    date: "Minggu, 26 April 2026",
    time: "10.00 WIB – Selesai",
    address: "JL Al-Innayah Karang Ampel RT003/RW004 No.15\nKp Rawa Kalong\nDesa Karang Satria\nKecamatan Tambun Utara\nKabupaten Bekasi",
    mapsQuery: "Kp+Rawa+Kalong+Desa+Karang+Satria+Tambun+Utara+Bekasi",
    slideFrom: "right",
  },
];

function EventCard({ event, index }) {
  const fromLeft = event.slideFrom === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay: index * 0.15, ease: [0.21, 1.02, 0.73, 1.02] }}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "40px 32px",
        background: `linear-gradient(145deg, rgba(75,31,40,0.6), rgba(42,22,24,0.78))`,
        border: `1px solid rgba(201,164,108,0.22)`,
        backdropFilter: "blur(10px)",
        overflow: "hidden",
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 55px rgba(201,164,108,0.18)" }}
    >
      {/* Accent corner glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: "radial-gradient(circle at top right, rgba(201,164,108,0.1), transparent)", borderRadius: "0 20px 0 0" }} />

      <div style={{ fontSize: 36, marginBottom: 18 }}>{event.icon}</div>
      <h3 style={{ fontFamily: fonts.heading, fontSize: 26, color: colors.gold, fontWeight: 600, marginBottom: 4 }}>{event.title}</h3>
      <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.3em", color: colors.cream, opacity: 0.48, textTransform: "uppercase", marginBottom: 22 }}>{event.subtitle}</p>

      <div style={{ height: 1, background: "rgba(201,164,108,0.18)", marginBottom: 22 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { Icon: Calendar, text: event.date },
          { Icon: Clock, text: event.time },
          { Icon: MapPin, text: event.address, multiline: true },
        ].map(({ Icon, text, multiline }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Icon size={14} style={{ color: colors.gold, marginTop: 3, flexShrink: 0 }} />
            <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.cream, opacity: 0.82, lineHeight: 1.65 }}>
              {multiline
                ? text.split("\n").map((l, j, arr) => (
                    <span key={j}>{l}{j < arr.length - 1 && <br />}</span>
                  ))
                : text}
            </p>
          </div>
        ))}
      </div>

      <motion.a
        href={`https://maps.google.com/?q=${event.mapsQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24, fontFamily: fonts.ui, fontSize: 11, letterSpacing: "0.2em", color: colors.gold, textTransform: "uppercase", textDecoration: "none" }}
        whileHover={{ x: 4 }}
      >
        <MapPin size={11} /> Lihat Lokasi
      </motion.a>
    </motion.div>
  );
}

export default function EventDetails() {
  return (
    <section
      id="event-details"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: sectionBg.dark,
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_DARK, backgroundSize: "80px 80px" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(201,164,108,0.06) 0%, transparent 70%)" }} />

      <div style={{ position: "absolute", top: 14, left: 14 }}><KawungCorner size={65} /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} /></div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader pre="Rangkaian Acara" title="Detail Acara" />

        <style>{`@media(min-width:768px){.events-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
        <div className="events-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          {events.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
