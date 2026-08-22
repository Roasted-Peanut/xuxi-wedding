import "../css/timeline.css";

const events = [
  {
    title: "Nhà gái",
    items: [
      ["Thời gian đãi tiệc", "08:30"],
      ["Nghi lễ Vu Quy", "13:00"],
    ],
  },
  {
    title: "Nhà trai",
    items: [
      ["Thời gian đãi tiệc", "08:30"],
      ["Nghi lễ Thành Hôn", "15:00"],
    ],
  },
];

export default function TimeLineSection() {
  return (
    <section className="timeline" aria-label="Lịch trình ngày cưới">
      <div className="timeline-events">
        {events.map((event) => (
          <div className="timeline-event" key={event.title}>
            <h3 className="timeline-event-title">{event.title}</h3>
            <div className="timeline-event-list">
              {event.items.map(([label, time]) => (
                <div className="timeline-event-row" key={label}>
                  <span>{label}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
