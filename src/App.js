
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Events from "./Events";
import MyTickets from "./MyTickets";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/tickets" element={<MyTickets />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
