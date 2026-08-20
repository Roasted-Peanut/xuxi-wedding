import { motion, AnimatePresence } from "framer-motion";

export function ImageViewer({ images, index, onClose, onChange }) {
    console.log('index', index);
    console.log('images', images[index]);
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={viewerStyles.overlay}
        >
          {/* background */}
          <div style={viewerStyles.backdrop} onClick={onClose} />

          {/* image */}
          <motion.img
            key={index}
            src={images[index]}
            loading="lazy"
            style={viewerStyles.image}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80 && index < images.length - 1)
                onChange(index + 1);
              if (info.offset.x > 80 && index > 0) onChange(index - 1);
            }}
          />

          {/* close */}
          <button style={viewerStyles.close} onClick={onClose}>
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const viewerStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "85%",
    borderRadius: 12,
    zIndex: 2,
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20,
    background: "rgba(255,255,255,0.2)",
    border: "none",
    color: "#fff",
    fontSize: 24,
    padding: "6px 12px",
    borderRadius: 8,
    zIndex: 3,
  },
};
