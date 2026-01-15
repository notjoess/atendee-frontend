
import React from "react";

const mockEvents = [
  { id: 1, title: "Tech Conference", date: "2026-02-01", location: "Manila", description: "Annual tech event" },
  { id: 2, title: "Startup Meetup", date: "2026-03-10", location: "Cebu", description: "Networking meetup" }
];

export default function Events() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Discover Events</h1>
      {mockEvents.map(e => (
        <div key={e.id} style={{ background: "#fff", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          <small>{e.date} | {e.location}</small>
        </div>
      ))}
    </div>
  );
}
