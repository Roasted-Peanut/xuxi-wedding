import React from "react";
import { MESSAGES, COUPLE_INFO } from "../constants/weddingData";

const TimeLineSection = React.memo(() => {
  return (
    <section className="timeline">
      <h2 className="timeline-title">{MESSAGES.TIMELINE_TITLE}</h2>

      <p className="timeline-text">{MESSAGES.TIMELINE_TEXT}</p>

      <div className="timeline-parents">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <strong>Chú Rể: </strong>
          <p className="timeline-names">{COUPLE_INFO.GROOM.name}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <strong>Cô Dâu: </strong>
          <p className="timeline-names"> {COUPLE_INFO.BRIDE.name}</p>
        </div>{" "}
        <div>
          <strong>Con ông:</strong> {COUPLE_INFO.GROOM.father}
        </div>
        <div>
          <strong>Con ông:</strong> {COUPLE_INFO.BRIDE.father}
        </div>
        <div>
          <strong>Con bà:</strong> {COUPLE_INFO.GROOM.mother}
        </div>
        <div>
          <strong>Con bà:</strong> {COUPLE_INFO.BRIDE.mother}
        </div>
      </div>
    </section>
  );
});

TimeLineSection.displayName = "TimeLineSection";

export default TimeLineSection;
