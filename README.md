# Portfolio Frontend Developer — Vue 3

Portafolio personal desarrollado con **Vue 3** + **Vite** y **Composition API**.

## Estructura de componentes

```
src/
├── main.js                   # Punto de entrada
├── App.vue                   # Componente raíz (compone todo)
├── styles/
│   └── main.css              # Variables globales, reset, utilidades
└── components/
    ├── NavBar.vue            # Navegación fija con detección de sección activa
    ├── HeroSection.vue       # Sección de bienvenida
    ├── AboutSection.vue      # Sobre mí
    ├── SkillsSection.vue     # Habilidades: JS, HTML, CSS, Vue
    ├── ProjectsSection.vue   # Proyectos con filtros por tecnología
    ├── ContactSection.vue    # Info de contacto
    └── FooterSection.vue     # Footer
```

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```
