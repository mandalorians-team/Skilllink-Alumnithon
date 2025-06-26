import React from "react";
import { Routes, Route } from "react-router-dom";
import DesafiosPage from "../pages/Aprendiz/desafios/DesafiosPage";
import DesafioDetallePage from "../pages/Aprendiz/desafios/DesafioDetallePage";

export default function DesafiosRoutes() {
  return (
    <Routes>
      <Route index element={<DesafiosPage />} />
      <Route path=":id" element={<DesafioDetallePage />} />
    </Routes>
  );
}
