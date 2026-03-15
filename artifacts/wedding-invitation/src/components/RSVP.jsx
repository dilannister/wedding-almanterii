import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { fonts, colors } from "../lib/fonts";
import { SectionHeader } from "./BrideGroom";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", attendance: "hadir", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputBase = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    background: "rgba(75,31,40,0.35)",
    border: "1px solid rgba(201,164,108,0.22)",
    color: colors.cream,
    fontFamily: fonts.body,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.25s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: fonts.ui,
    fontSize: 10,
    letterSpacing: "0.35em",
    color: colors.gold,
    textTransform: "uppercase",
    marginBottom: 8,
  };

  return (
    <section
      id="rsvp"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${colors.darkBrown} 0%, ${colors.maroon} 50%, ${colors.darkBrown} 100%)`,
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,164,108,0.06), transparent)" }} />

      <div style={{ position: "relative", maxWidth: 560, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader pre="Konfirmasi Kehadiran" title="RSVP" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 1.02, 0.73, 1.02] }}
          style={{
            borderRadius: 20,
            padding: "44px 36px",
            background: "rgba(42,22,24,0.72)",
            border: "1px solid rgba(201,164,108,0.22)",
            backdropFilter: "blur(14px)",
            position: "relative",
          }}
        >
          {/* Corner accents */}
          {[
            { top: 0, left: 0, borderTop: `2px solid rgba(201,164,108,0.5)`, borderLeft: `2px solid rgba(201,164,108,0.5)`, borderRadius: "12px 0 0 0" },
            { top: 0, right: 0, borderTop: `2px solid rgba(201,164,108,0.5)`, borderRight: `2px solid rgba(201,164,108,0.5)`, borderRadius: "0 12px 0 0" },
            { bottom: 0, left: 0, borderBottom: `2px solid rgba(201,164,108,0.5)`, borderLeft: `2px solid rgba(201,164,108,0.5)`, borderRadius: "0 0 0 12px" },
            { bottom: 0, right: 0, borderBottom: `2px solid rgba(201,164,108,0.5)`, borderRight: `2px solid rgba(201,164,108,0.5)`, borderRadius: "0 0 12px 0" },
          ].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: 28, height: 28, ...s }} />
          ))}

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", padding: "32px 0" }}
            >
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(201,164,108,0.18)", border: `2px solid ${colors.gold}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <Check size={28} color={colors.gold} />
              </div>
              <h3 style={{ fontFamily: fonts.script, fontSize: 36, color: colors.gold, marginBottom: 12 }}>Terima Kasih!</h3>
              <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.cream, opacity: 0.8, lineHeight: 1.7 }}>
                Konfirmasi kehadiran Anda telah kami terima.<br />Kami menantikan kehadiran Anda dengan penuh sukacita.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>Nama Lengkap</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Masukkan nama Anda" required
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.55)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.22)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Kehadiran</label>
                <select
                  name="attendance" value={form.attendance} onChange={handleChange}
                  style={{ ...inputBase, cursor: "pointer" }}
                >
                  <option value="hadir" style={{ background: "#2a1618" }}>Ya, saya akan hadir</option>
                  <option value="tidak" style={{ background: "#2a1618" }}>Maaf, saya tidak bisa hadir</option>
                  <option value="mungkin" style={{ background: "#2a1618" }}>Mungkin hadir</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Pesan & Doa</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tuliskan ucapan dan doa terbaik Anda..." rows={4}
                  style={{ ...inputBase, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.55)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,164,108,0.22)")}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                style={{
                  padding: "15px",
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${colors.gold}, #e8c98a, ${colors.gold})`,
                  color: colors.darkBrown,
                  fontFamily: fonts.ui,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  boxShadow: "0 0 20px rgba(201,164,108,0.28)",
                  opacity: loading ? 0.75 : 1,
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(201,164,108,0.45)" }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <motion.div
                    style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid #2a1618", borderTopColor: "transparent" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <><Send size={14} /> Kirim Konfirmasi</>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
