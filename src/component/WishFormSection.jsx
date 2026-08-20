import { motion } from "framer-motion";
import { useState } from "react";
import { MESSAGES } from "../constants/weddingData";
import { saveUserWish } from "../services/firestoreService";

export default function WishFormSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !message) return alert(MESSAGES.GUESTBOOK_ERROR);
    console.log({ name, message });
    alert(MESSAGES.GUESTBOOK_SUCCESS.replace("{name}", name));

    setName("");
    setMessage("");
    saveUserWish(new Date().getMilliseconds().toString(), name, message);
  };

  return (
    <section
      className="section"
      style={{
        maxWidth: 360,
      }}
    >
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          GỬI LỜI CHÚC 💌
        </motion.h3>

        {/* Name */}
        <motion.input
          type="text"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Message */}
        <motion.textarea
          placeholder="Lời chúc dành cho cô dâu & chú rể"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          rows={4}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {MESSAGES.TIMELINE_TEXT}
        </motion.p>
        {/* Button */}
        <motion.button
          style={styles.button}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleSubmit}
        >
          Gửi lời chúc
        </motion.button>
      </motion.div>
    </section>
  );
}

const styles = {
  card: {
    maxWidth: 360,
    margin: "24px auto",
    padding: 16,
    borderRadius: 16,
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  input: {
    maxWidth: 360,
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 14,
  },
  textarea: {
    maxWidth: 360,
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 14,
    resize: "none",
  },
  button: {
    marginTop: 8,
    padding: "12px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #ff758f, #ff4d6d)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
  },
};
