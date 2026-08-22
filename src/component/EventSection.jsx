import { motion } from "framer-motion";
import { a, g } from "framer-motion/client";
import WeddingCalendar from "./WeddingCalendar";
import { EVENT_LOCATIONS, WEDDING_IMAGES } from "../constants/weddingData";

export default function EventSection() {
  return (
    <section className="section">
      <>
        <div
          style={{
            maxWidth: 360,
            gap: 20,
            overflow: "hidden",
            flex: 1,
            marginTop: 24
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 16,
              color: "#7a5a3a",
            }}
          >
            <h3
              style={{
                margin: 0,
                // fontSize: 18,
                fontWeight: 500,
                letterSpacing: "2px",
                whiteSpace: "nowrap",
                // fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              LỄ VU QUY
            </h3>

            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(to right, transparent, #c8a98a, transparent)",
                opacity: 0.8,
              }}
            />
            <row>
              <h3
                style={{
                  margin: 0,
                  // fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  whiteSpace: "nowrap",
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#8a6a4a",
                }}
              >
                20 · 09 · 2026
              </h3>
              <div style={{ fontStyle: "italic", fontSize: 14 }}>
                (Tức 10-08 năm Bính Ngọ)
              </div>
            </row>
          </div>

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: 8,
            }}
          >
            {/* BÊN TRÁI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <img
                  src={WEDDING_IMAGES[18]}
                  alt="Bride"
                  loading="lazy"
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                    marginTop: "8px",
                  }}
                />
              </motion.div>
            </div>

            {/* BÊN PHẢI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                {/* Thông tin */}
                <div style={{ lineHeight: 1.8 }}>
                  <strong>Thời gian đãi tiệc: 08:30</strong>
                  <div style={{ marginTop: 4 }}>
                    <strong>Nghi lễ diễn ra lúc 13:00</strong>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <strong>Tại tư gia nhà gái</strong>
                  </div>
                  <div className="event-map">
                    <iframe
                      title="Google Map"
                      src={EVENT_LOCATIONS.BRIDE.mapUrl}
                      width="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* LỄ THÀNH HÔN */}
        <div
          style={{
            maxWidth: 360,
            gap: 20,
            overflow: "hidden",
            flex: 1,
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              width: "100%",
              gap: 16,
              color: "#7a5a3a",
            }}
          >
            <h3
              style={{
                margin: 0,
                // fontSize: 18,
                fontWeight: 500,
                letterSpacing: "2px",
                whiteSpace: "nowrap",
                // fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              LỄ THÀNH HÔN
            </h3>

            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(to right, transparent, #c8a98a, transparent)",
                opacity: 0.8,
              }}
            />
            <row>
              <h3
                style={{
                  margin: 0,
                  // fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  whiteSpace: "nowrap",
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#8a6a4a",
                }}
              >
                20 · 09 · 2026
              </h3>
              <div style={{ fontStyle: "italic", fontSize: 14 }}>
                (Tức 10-08 năm Bính Ngọ)
              </div>
            </row>
          </div>

          <div
            style={{
              flexDirection: "row-reverse",
              display: "flex",
              gap: 8,
            }}
          >
            {/* BÊN TRÁI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <img
                  src={WEDDING_IMAGES[15]}
                  alt="Groom"
                  loading="lazy"
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                    marginTop: "8px",
                  }}
                />
              </motion.div>
            </div>

            {/* BÊN PHẢI */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                {/* Thông tin */}
                <div style={{ lineHeight: 1.8 }}>
                  <strong>Thời gian đãi tiệc: 08:30</strong>
                  <div style={{ marginTop: 4 }}>
                    <strong>Nghi lễ diễn ra lúc 13:00</strong>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <strong>Tại tư gia nhà trai</strong>
                  </div>

                  <iframe
                    title="Google Map"
                    src={EVENT_LOCATIONS.GROOM.mapUrl}
                    width="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <WeddingCalendar />
      </>
    </section>
  );
}
