import { motion } from "framer-motion";
import React, { useState } from "react";
import { WEDDING_IMAGES } from "../constants/weddingData";

export default function CoverSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="section" style={{}}>
      <div style={{ maxWidth: 360, overflow: "hidden" }}>
        <motion.h2
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          style={{ letterSpacing: 2 }}
        >
          TRÂN TRỌNG KÍNH MỜI
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ letterSpacing: 2, color: "rgb(239 77 77)" }}
        >
          QUÝ VỊ
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          Đến tham dự lễ thành hôn của chúng tôi
        </motion.p>
        {/* Ảnh từ dưới lên */}
        <motion.img
          src={WEDDING_IMAGES[19]}
          alt="Wedding"
          loading="lazy"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            borderRadius: 16,
            margin: "0",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            filter: loaded ? "blur(0)" : "blur(12px)",
            transition: "filter 0.6s ease",
          }}
        />
      </div>
    </section>
  );
}
