import React from "react";



export default function Footer() {
  return (
    <footer className="bg-header text-white p-4  justify-center items-center">
      <p className="text-center text-sm text-card-subtitle">
        &copy; {new Date().getFullYear()} . Todos los derechos reservados.
      </p>
    </footer>
  );
}
