import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "@/components/comun/Header";
import Footer from "@/components/comun/Footer";
import Sidebar from "@/components/comun/Sidebar";
import { useLocation } from "react-router-dom";
import CurseTabs from "@/components/Aprendiz/Curso/CourseTabs";
import AppRoutes from "@/routes/AppRoutes";

/**
 * El Layout principal de la aplicación.
 * Contiene los elementos persistentes como el Sidebar y el Header.
 * El componente <Outlet> renderizará el componente de la ruta actual.
 */
function Layout() {
  const location = useLocation();

  const showFooter = /^\/(courses|mentorias|proyectos)(\/\d+)?$/.test(
    location.pathname
  );

  // Mostrar CourseTabs solo en /courses/:id o subrutas, pero no en /courses
  const isCourseTabs = /^\/courses\/[^/]+(\/.*)?$/.test(location.pathname);

  return (
    <div className="flex bg-page-background-color min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        {isCourseTabs && <CurseTabs />}
        <main className="p-6 bg-blue-200 flex-grow">
          <Outlet />
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}

/**
 * Componente raíz de la aplicación.
 * Configura el enrutador y las rutas principales.
 */
function App() {
  return (
    <div className="min-h-screen bg-page-background-color text-gray-100">
      <AppRoutes />
    </div>
  );
}

// Exportamos Layout para que AppRoutes pueda usarlo.
export { Layout };
export default App;
