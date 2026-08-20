import { motion } from "framer-motion";
import { WEDDING_IMAGES } from "../constants/weddingData";

export default function ThreePhotoSection() {
  return (
    <section className="section">
      <div style={styles.wrapper}>
        {/* LEFT */}
        <motion.img
          src={WEDDING_IMAGES[9]}
          alt="LEFT"
          loading="lazy"
          style={styles.sideImage}
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5,  delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
        />

        {/* CENTER */}
        <motion.img
          src={WEDDING_IMAGES[14]}
          alt="CENTER"
          loading="lazy"
          style={styles.centerImage}
          initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        />

        {/* RIGHT */}
        <motion.img
          src={WEDDING_IMAGES[11]}
          alt="RIGHT"
          loading="lazy"
          style={styles.sideImage}
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5,  delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
        />
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    // gap: 8,
    maxWidth: 360,
    overflow: "hidden",
    marginTop: 24,
    marginBottom: 24,
  },
  sideImage: {
    width: 360/3,
    height: 170,
    objectFit: "cover",
    borderRadius: 12,
    flexShrink: 0,
    opacity: 0.9,
  },
  centerImage: {
    width: 360/3,
    height: 200,
    objectFit: "cover",
    borderRadius: 16,
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    zIndex: 2,
  },
};
