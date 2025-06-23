import { useEffect } from 'react';

/**
 * Un custom hook para actualizar dinámicamente el título de la pestaña del navegador.
 *
 * @param {string} title - El título que se desea mostrar. El hook añadirá automáticamente el prefijo "SkillLink | ".
 * @example
 * useDocumentTitle('Mis Cursos'); // El título de la pestaña será "SkillLink | Mis Cursos"
 */
function useDocumentTitle(title) {
  // useEffect se ejecuta después de que el componente se renderiza y cada vez que el 'title' cambia.
  useEffect(() => {
    // Actualiza el título del documento (la pestaña del navegador).
    document.title = `SkillLink | ${title}`;
  }, [title]); // El array de dependencias asegura que el efecto solo se ejecute si 'title' cambia.
}

export default useDocumentTitle;