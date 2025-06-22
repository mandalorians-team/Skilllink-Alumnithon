/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-light-blue': '#7799BB',
        'palette-dark-blue-gray': '#3D505B',
        'palette-teal': '#598F7A',
        'palette-steel-blue': '#5A7A9E',
        'palette-brown': '#59483B',
        'palette-tan': '#AF8A79',
        'palette-light-gray': '#D4D4D2',
        'palette-gray': '#8D8F91',
        background: '#B8CFDF',
        header: '#0D121C',
        'card-title': '#0D121C',
        'card-subtitle': '#8C8D8B',
        'card-border': '#8cb6d9',
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#799eb8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
}