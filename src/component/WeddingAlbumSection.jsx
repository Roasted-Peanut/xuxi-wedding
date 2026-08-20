import { useState } from "react";
import { motion } from "framer-motion";
import { ImageViewer } from "./ImageViewer";
import { WEDDING_IMAGES } from "../constants/weddingData";

export default function WeddingAlbumSection() {

  const [active, setActive] = useState(null);

  const blocks = [];
  let isDouble = true; // 2-1 xen kẽ

  for (let i = 0; i < WEDDING_IMAGES.length; ) {
    // ===== DOUBLE IMAGE BLOCK =====
    if (isDouble && i + 1 < WEDDING_IMAGES.length) {
      const leftIndex = i;
      const rightIndex = i + 1;

      blocks.push(
        <div key={`double-${i}`} style={styles.double}>
          {/* LEFT */}
          <motion.img
            src={WEDDING_IMAGES[leftIndex]}
            loading="lazy"
            style={styles.doubleImg}
            onClick={() => setActive(leftIndex)}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />

          {/* RIGHT */}
          <motion.img
            src={WEDDING_IMAGES[rightIndex]}
            loading="lazy"
            style={styles.doubleImg}
            onClick={() => setActive(rightIndex)}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
        </div>
      );

      i += 2;
    }
    // ===== SINGLE IMAGE BLOCK =====
    else {
      const currentIndex = i;

      blocks.push(
        <motion.img
          key={`single-${i}`}
          src={WEDDING_IMAGES[currentIndex]}
          loading="lazy"
          style={styles.singleImg}
          onClick={() => setActive(currentIndex)}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ amount: 0.35, once: false }}
        />
      );

      i += 1;
    }

    // đổi pattern 2 → 1 → 2 → 1
    isDouble = !isDouble;
  }

  return (
    
      <section className="section">
      <div style={styles.wrapper}>{blocks}</div>
      <ImageViewer
        images={WEDDING_IMAGES}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
      </section>

      
    
  );
}
const styles = {
  section: {
    padding: "60px 0",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    overflowX: 'hidden',
  },
  double: {
    display: "flex",
    gap: 12,
    witdh: "100%",
  },
  doubleImg: {
    width: 180,
    height: 250,
    objectFit: "cover",
    borderRadius: 14,
    cursor: "pointer",
  },
  singleImg: {
    // width: "100%",
    flex: 1,
    height: 240,
    objectFit: "cover",
    borderRadius: 16,
    cursor: "pointer",
  },
};
