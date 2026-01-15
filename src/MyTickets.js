
import React from "react";
import QRCode from "qrcode.react";

export default function MyTickets() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Tickets</h1>
      <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px", width: "300px" }}>
        <h3>Tech Conference</h3>
        <QRCode value="TICKET-12345" />
      </div>
    </div>
  );
}
