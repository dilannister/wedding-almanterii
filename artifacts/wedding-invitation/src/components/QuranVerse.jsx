import { motion } from "framer-motion";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { GoldDivider, GununganSmall, KawungCorner, BATIK_KAWUNG_LIGHT } from "../lib/shared";

export default function QuranVerse() {
  return (
    <section
      id="quran-verse"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: sectionBg.light,
      }}
    >
      {/* Batik overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: BATIK_KAWUNG_LIGHT,
        backgroundSize: "80px 80px",
      }} />

      {/* Radial center glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(201,164,108,0.1) 0%, transparent 70%)",
      }} />

      {/* Corner ornaments */}
      <div style={{ position: "absolute", top: 14, left: 14 }}><KawungCorner size={65} light /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><KawungCorner size={65} flip light /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} flip light /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} light /></div>

      {/* Gold border lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.maroon}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.maroon}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 680, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>

        {/* Gunungan */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}
        >
          <GununganSmall light />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{
            fontFamily: fonts.body,
            fontSize: "clamp(18px,3vw,26px)",
            color: colors.maroon,
            fontStyle: "italic",
            lineHeight: 1.85,
            marginBottom: 20,
          }}
        >
          "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat kebesaran Allah."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.4em", color: colors.maroon, textTransform: "uppercase", opacity: 0.65, marginBottom: 28 }}
        >
          QS. Adz-Dzariyat : 49
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1 }}
          style={{ marginBottom: 28 }}
        >
          <GoldDivider light />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            fontFamily: fonts.body,
            fontSize: "clamp(14px,2.2vw,18px)",
            color: colors.maroon,
            opacity: 0.75,
            lineHeight: 1.9,
            maxWidth: 540,
            margin: "0 auto",
          }}
        >
          Semoga dengan bersatunya kami dalam ikatan suci pernikahan ini, menjadi awal perjalanan hidup yang penuh keberkahan, kasih sayang, dan kebahagiaan.
        </motion.p>
      </div>
    </section>
  );
}
