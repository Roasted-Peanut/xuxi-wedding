import { delay, m, motion } from "framer-motion";
import { WEDDING_IMAGES } from "../constants/weddingData";

export default function CoupleSection() {
  return (
    <section className="section">
      <div
        style={{
          maxWidth: 360,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* NHÀ TRAI */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              flex: 1,
              textAlign: "right",
            }}
          >
            <h3>NHÀ TRAI</h3>
            <p>
              <strong>Ông:</strong> Phạm Văn Sỹ
            </p>
            <p>
              <strong>Bà:</strong> NguyễnThị Liên
            </p>
            <p>Đội 5 thôn Thanh Lanh, xã Hà Đông, Hải Phòng</p>
          </motion.div>
          <motion.div>
            <div style={{ width: 20 }}></div>
          </motion.div>

          {/* NHÀ GÁI */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <h3>NHÀ GÁI</h3>
            <p>
              <strong>Ông:</strong> Nguyễn Văn Điệp
            </p>
            <p>
              <strong>Bà:</strong> Nguyễn Thị Thêu
            </p>
            <p>Thôn 7 xã Thanh Hà, Hải Phòng</p>
          </motion.div>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Trân Trọng Báo Tin Lễ Thành Hôn Của
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              textAlign: "left",
              margin: "0",
              fontFamily: "Arizonia",
              fontSize: 48,
            }}
          >
            Thế Phúc
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ margin: "0", fontFamily: "Arizonia" }}
          >
            &
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              textAlign: "right",
              margin: "0",
              fontFamily: "Arizonia",
              fontSize: 48,
            }}
          >
            Bích Diệp
          </motion.h1>

          <motion.img
            src={WEDDING_IMAGES[3]}
            loading="lazy"
            alt="Wedding-cup"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              width: "100%",
              borderRadius: 16,
              boxShadow: "rgb(246 246 246) 0px 10px 30px",
              marginTop: 16,
            }}
          />
        </div>
      </div>
    </section>
  );
}
