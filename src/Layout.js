
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Eventify</h2>
          <p>Attendee</p>
        </div>
        <nav className="sidebar-nav">
          <Link className={`nav-item ${pathname === "/" ? "active" : ""}`} to="/">Events</Link>
          <Link className={`nav-item ${pathname === "/tickets" ? "active" : ""}`} to="/tickets">My Tickets</Link>
        </nav>
      </aside>
      <main className="main-content">
        <div className="content-container">{children}</div>
      </main>
    </div>
  );
}
