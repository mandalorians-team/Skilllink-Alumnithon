import { Routes, Route } from "react-router-dom";
import ProyectsPage from "../pages/proyectos/ProyectsPage";

export default function ProyectsRoutes() {
  return (
    <Routes>
      <Route path="/proyectos" element={<ProyectsPage />} />
    </Routes>
  );
}
