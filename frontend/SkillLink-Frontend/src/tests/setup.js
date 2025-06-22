import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Ejecuta una limpieza después de cada prueba (por ejemplo, desmonta los componentes)
afterEach(() => {
  cleanup();
});