import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { fonts, colors } from "../lib/fonts";
import { SectionHeader } from "./BrideGroom";

const events = [
  {
    icon: "🕌",
    title: "Akad Nikah",
    subtitle: "Ijab Kabul",
    date: "Sabtu, 12 April 2025",
    time: "08.00 – 10.00 WIB",
    address: "Pendopo Agung Mangkunegaran\nJl. Ronggowarsito, Timuran\nBanjarsari, Surakarta",
    slideFrom: "left",
  },
  {
    icon: "🌹",
    title: "Resepsi Pernikahan",
    subtitle: "Wedding Reception",
    date: "Sabtu, 12 April 2025",
    time: "11.00 – 15.00 WIB",
    address: "Ballroom Pura Mangkunegaran\nJl. Ronggowarsito, Timuran\nBanjarsari, Surakarta",
    slideFrom: "right",
  },
];

function EventCard({ event, index }) {
  const fromLeft = event.slideFrom === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.21, 1.02, 0.73, 1.02] }}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "40px 32px",
        background: `linear-gradient(145deg, rgba(75,31,40,0.55), rgba(42,22,24,0.75))`,
        border: `1px solid rgba(201,164,108,0.22)`,
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        transition: "box-shadow 0.4s, transform 0.4s",
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 55px rgba(201,164,108,0.18)" }}
    >
      {/* Accent glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: "radial-gradient(circle at top right, rgba(201,164,108,0.1), transparent)", borderRadius: "0 20px 0 0" }} />

      <div style={{ fontSize: 36, marginBottom: 20 }}>{event.icon}</div>

      <h3 style={{ fontFamily: fonts.heading, fontSize: 26, color: colors.gold, fontWeight: 600, marginBottom: 4 }}>{event.title}</h3>
      <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.3em", color: colors.cream, opacity: 0.5, textTransform: "uppercase", marginBottom: 24 }}>{event.subtitle}</p>

      <div style={{ height: 1, background: "rgba(201,164,108,0.2)", marginBottom: 24 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { Icon: Calendar, text: event.date },
          { Icon: Clock, text: event.time },
          { Icon: MapPin, text: event.address, multiline: true },
        ].map(({ Icon, text, multiline }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Icon size={15} style={{ color: colors.gold, marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.cream, opacity: 0.83, lineHeight: 1.6 }}>
              {multiline ? text.split("\n").map((l, j) => <span key={j}>{l}{j < text.split("\n").length - 1 && <br />}</span>) : text}
            </p>
          </div>
        ))}
      </div>

      <motion.a
        href="https://maps.google.com/?q=Pura+Mangkunegaran+Surakarta"
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
        background: `linear-gradient(180deg, ${colors.darkBrown} 0%, #1a0d10 50%, ${colors.darkBrown} 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='28' y='0' width='4' height='4' fill='%23C9A46C' fill-opacity='0.025'/%3E%3Crect x='0' y='28' width='4' height='4' fill='%23C9A46C' fill-opacity='0.025'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader pre="Event" title="Detail Acara" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          <style>{`@media(min-width:768px){.events-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
          <div className="events-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
            {events.map((event, i) => (
              <EventCard key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
