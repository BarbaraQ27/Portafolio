<template>
  <section id="proyectos" class="section">
    <div class="container">
      <div class="section-over">Trabajo</div>
      <div class="projects-header">
        <h2 class="section-title">Proyectos destacados</h2>
        <div class="filter-tabs">
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-tab"
            :class="{ active: activeFilter === filter }"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
          :class="{ featured: project.featured }"
        >
          <div class="project-thumb" :style="{ background: project.thumbBg }">
            <span class="project-emoji">{{ project.emoji }}</span>
          </div>

          <div class="project-body">
            <div class="project-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="project-tag"
                :class="tag.toLowerCase()"
                >{{ tag }}</span
              >
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>

            <div class="project-footer">
              <a href="" class="project-link primary">
                Demo
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
              <a :href="project.github" class="project-link" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const activeFilter = ref("Todos");
const filters = ["Todos", "Vue", "JavaScript", "CSS", "HTML"];

const projects = [
  {
    title: "Tienda de Videojuegos",
    desc: "Plataforma SPA de simulación de compras con carrito, integrando una página principal, login con autentificador virtual mediante el sitio web https://reqres.in/ y dashboard interactivo. Proyecto responsivo. Derechos de API a https://rawg.io/ ",
    tags: ["Vue", "JavaScript", "CSS"],
    emoji: "🛒",
    thumbBg: "linear-gradient(135deg, #1a1a2e, #16213e)",
    github: "https://github.com/BarbaraQ27/Game-Store",
    featured: true,
  },
  {
    title: "App BookList ",
    desc: "Aplicación SPA de generación de lista de libros que permite ingresar cards mediante formulario y guardar en LocalStorage.",
    tags: ["Vue", "JavaScript", "CSS"],
    emoji: "📚",
    thumbBg: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    github: "https://github.com/BarbaraQ27/BookList",
    featured: false,
  },
  {
    title: "APP GameList",
    desc: "Aplicación de prueba de API fetch para generar una lista interactiva y de búsqueda para agregar juegos a una lista personal que simula estado de pendiente y completado. Derechos de API a https://rawg.io  ",
    tags: ["JavaScript", "HTML", "CSS"],
    emoji: "🎮",
    thumbBg: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
    github: "https://github.com/BarbaraQ27/Game-List",
    featured: false,
  },
  {
    title: "Prueba de consola",
    desc: "Aplicación simple de prueba de JavaScript para la interacción con el uso de console.log para simular una compra y controlar un stock mediante inputs del usuario",
    tags: ["JavaScript"],
    emoji: "💻",
    thumbBg: "linear-gradient(135deg, #0f2027, #203a43)",
    github: "https://github.com/BarbaraQ27/Aplicacion-de-consola",
    featured: false,
  },
  {
    title: "Interfaz simple de Wallet digital",
    desc: "Plataforma que incluye una landing page, login interactivo y dashboard utilizando rutas de HTML  ",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "💳",
    thumbBg: "linear-gradient(135deg, #1f1c2c, #928dab)",
    github: "https://github.com/BarbaraQ27/Alke-Wallet",
    featured: false,
  },
];

const filteredProjects = computed(() =>
  activeFilter.value === "Todos"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter.value)),
);
</script>

<style scoped>
.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}

.filter-tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.filter-tab {
  font-size: 13px;
  padding: 6px 16px;
  border-radius: 99px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition);
  font-family: var(--font-body);
}

.filter-tab:hover {
  border-color: var(--color-border-hover);
  color: var(--color-text-primary);
}
.filter-tab.active {
  background: var(--color-accent);
  color: #0c0c0f;
  border-color: var(--color-accent);
  font-weight: 500;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 340px);
  gap: 20px;
  margin-top: 16px;
}

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-3px);
}

.project-card.featured {
  grid-column: span 2;
}

.project-thumb {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-emoji {
  font-size: 40px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
}

.project-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.project-tag {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid;
}

/* Colores de los tag */
.project-tag.vue {
  color: var(--color-vue);
  border-color: rgba(79, 192, 141, 0.3);
  background: rgba(79, 192, 141, 0.08);
}
.project-tag.javascript {
  color: var(--color-js);
  border-color: rgba(240, 208, 96, 0.3);
  background: rgba(240, 208, 96, 0.08);
}
.project-tag.css {
  color: var(--color-css);
  border-color: rgba(91, 156, 246, 0.3);
  background: rgba(91, 156, 246, 0.08);
}
.project-tag.html {
  color: var(--color-html);
  border-color: rgba(246, 205, 91, 0.3);
  background: rgba(246, 205, 91, 0.08);
}

.project-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 6px;
}

.project-desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 20px;
}

.project-footer {
  display: flex;
  gap: 10px;
  align-items: center;
}

.project-link {
  font-size: 13px;
  color: var(--color-text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  transition: all var(--transition);
}

.project-link:hover {
  border-color: var(--color-border-hover);
  color: var(--color-text-primary);
}

.project-link.primary {
  background: var(--color-accent-dim);
  border-color: rgba(232, 213, 163, 0.2);
  color: var(--color-accent);
}

.project-link.primary:hover {
  background: var(--color-accent-dim);
  border-color: var(--color-accent);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 400px 400px;
  }
  .project-card.featured {
    grid-column: span 1;
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 420px;
  }
  .projects-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
