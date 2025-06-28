# 🚀 SkillLink Frontend

**SkillLink** es una plataforma educativa que conecta a estudiantes con mentores mediante cursos, mentorías y proyectos colaborativos. Este repositorio contiene la implementación del frontend de la aplicación, desarrollada con **React** y **Tailwind CSS**, con enfoque modular y mantenible.

---

## 📁 Estructura del proyecto por parte del frontend

```bash
src/
│
├── assets/                  # Imágenes y logotipos
│
├── components/             # Componentes reutilizables organizados por dominio
│   ├── Curso/              # Tarjetas, encabezados, tabs, módulos
│   ├── Mentorías/          # Historial, estadísticas, sesiones
│   ├── Proyectos/          # Tarjetas de proyectos y filtros
│   ├── Sidebar/            # Sidebar del panel del estudiante
│   ├── búsqueda/           # SearchBar y filtros
│   ├── comun/              # Header y Footer general
│   └── ui/                 # Botones, Inputs, Modales
│
├── context/                # (Opcional) Estado global
│
├── data/                   # Datos de prueba (ej. mentorías)
│
├── hooks/                  # Custom hooks (ej. título del documento)
│
├── interfaces/             # Tipos TypeScript para datos del backend
│
├── pages/                  # Páginas principales del sistema
│   ├── curso/              # Páginas de contenido, layout, etc.
│   ├── mentorias/          # Página de mentorías
│   └── proyectos/          # Página de proyectos
│
├── routes/                 # Rutas generales y por módulo
│
├── services/               # Conexiones al backend/API
│   └── BackendService.js
│
├── styles/                 # Estilos globales (Tailwind)
│   └── global.css
│
├── tests/                  # Pruebas unitarias (ej. tarjeta de proyecto)
│
└── main.jsx / App.jsx      # Entradas principales de la app
