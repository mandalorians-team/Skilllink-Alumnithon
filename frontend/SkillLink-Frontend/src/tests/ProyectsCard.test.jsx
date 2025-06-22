import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProyectsCard from "../components/Proyectos/ProyectsCard";

// 1. Describe: Agrupamos las pruebas para el componente ProyectsCard
describe("ProyectsCard", () => {
  // Datos de ejemplo para una prueba específica (mock data)
  const mockProject = {
    id: 1,
    title: "Proyecto de Prueba",
    description: "Esta es una descripción de prueba.",
    image: "test-image.jpg",
    status: "activo",
    dueDate: "2024-12-31",
    progress: 50,
    members: [{ avatar: "avatar.jpg" }],
  };

  // 2. It: Define una prueba individual. El nombre describe lo que debería hacer.
  it("debería renderizar los detalles del proyecto correctamente", () => {
    // 3. Render: Renderiza el componente en un entorno de prueba virtual.
    render(<ProyectsCard proyect={mockProject} />);

    // 4. Assert (Afirmar): Buscamos elementos en la "pantalla" y verificamos que existen.
    // Esto simula lo que un usuario vería.
    expect(screen.getByText("Proyecto de Prueba")).toBeInTheDocument();
    expect(
      screen.getByText("Esta es una descripción de prueba.")
    ).toBeInTheDocument();
    expect(screen.getByText("Activo")).toBeInTheDocument(); // Verifica la insignia de estado
    expect(screen.getByText("50% Completado")).toBeInTheDocument(); // Verifica el progreso
  });

  it("no debería renderizar nada si no se proporciona un proyecto", () => {
    // Renderizamos el componente sin la prop 'proyect'
    const { container } = render(<ProyectsCard />);

    // El contenedor del componente debería estar vacío
    expect(container.firstChild).toBeNull();
  });
});
