import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { listenWishes } from "../services/firestoreService";

const INTERVAL = 10000;

export default function SingleWishRunner() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);

  // 🔥 Realtime listener
  useEffect(() => {
    const unsubscribe = listenWishes((data) => {
      setList(data);
      setIndex(0); // reset nhẹ khi có data mới
    });

    return () => unsubscribe();
  }, []);

  // ⏱ Auto chạy từng lời chúc
  useEffect(() => {
    if (!list.length) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % list.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [list]);

  const current = list[index];

  return (
    <div style={styles.wrapper}>
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div style={styles.name}>{current.name}</div>
            <div style={styles.message}>{current.wish}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
    wrapper: {
      position: "fixed",
      bottom: 90,
      left: "50%",
      transform: "translateX(-50%)",
      width: 360,
      zIndex: 1000,
      pointerEvents: "none",
    },
    card: {
        background: "rgba(255,255,255,0.5)",
        // background: 'transparent',
      backdropFilter: "blur(6px)",
      borderRadius: 16,
      padding: "14px 16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
    name: {
      fontSize: 16,
      fontWeight: 600,
      color: "#ff4d6d",
      marginBottom: 6,
    },
    message: {
      fontSize: 16,
      color: "#444",
      lineHeight: 1.4,
      wordBreak: "break-word",
    },
  };
  
