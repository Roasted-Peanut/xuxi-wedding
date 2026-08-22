import { motion } from "framer-motion";
import "../css/weddingGift.css";

const giftAccounts = [
  {
    label: "Mừng cưới cô dâu",
    image: "./wedding/QR-Xuxi.jpg",
  },
  {
    label: "Mừng cưới chú rể",
    image: "./wedding/QR-xuxi-đực.jpg",
  },
];

export default function WeddingGiftSection() {
  return (
    <section className="wedding-gift section" aria-labelledby="wedding-gift-title">
      <motion.div
        className="wedding-gift__card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="wedding-gift__eyebrow">Một chút yêu thương</p>
        <h2 id="wedding-gift-title">Mừng cưới</h2>
        <p className="wedding-gift__description">
          Cảm ơn bạn đã gửi lời chúc và chung vui cùng gia đình chúng mình.
        </p>

        <div className="wedding-gift__grid">
          {giftAccounts.map((account, index) => (
            <motion.figure
              className="wedding-gift__item"
              key={account.image}
              initial={{ opacity: 0, x: index === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="wedding-gift__image-frame">
                <img src={account.image} alt={`Mã QR ${account.label}`} loading="lazy" />
              </div>
              <figcaption>{account.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
