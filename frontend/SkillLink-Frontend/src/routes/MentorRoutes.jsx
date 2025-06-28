import React from "react";
import { Route, Routes } from "react-router-dom";
import AgendaPage from "../pages/mentor/AgendaPage";
import ChatPage from "../pages/mentor/ChatPage";
import MisCursosPage from "../pages/mentor/MisCursosPage";
import ConfiguracionPage from "../pages/mentor/ConfiguracionPage";
import MisAlumnosPage from "../pages/mentor/MisAlumnosPage";


export default function MentorRoutes() {
  return (
    <Routes>
      <Route path="agenda" element={<AgendaPage />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="cursos" element={<MisCursosPage />} />
      <Route path="configuracion" element={<ConfiguracionPage />} />
      <Route path="alumnos" element={<MisAlumnosPage />} />
    </Routes>
  );
}
