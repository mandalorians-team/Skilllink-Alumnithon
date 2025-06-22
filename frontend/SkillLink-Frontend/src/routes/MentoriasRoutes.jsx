import React from "react";
import { Route, Routes } from "react-router-dom";
import MentoriasPage from "../pages/mentorias/MentoriasPage";

export default function MentoriasRoutes() {
  return (
    <Routes>
      <Route path="/mentorias" element={<MentoriasPage />} />
    </Routes>
  );
}

