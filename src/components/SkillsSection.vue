<template>
  <section id="habilidades" class="section skills-section">
    <div class="container">
      <div class="section-over">Tecnologías</div>
      <h2 class="section-title">Mis habilidades</h2>

      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
          :style="{ '--skill-color': skill.color }"
          @mouseenter="skill.hovered = true"
          @mouseleave="skill.hovered = false"
        >
          <div class="skill-header">
            <div class="skill-icon">
              <span class="skill-abbr">{{ skill.abbr }}</span>
            </div>
            <div class="skill-meta">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}</span>
            </div>
          </div>

          <p class="skill-desc">{{ skill.description }}</p>

          <div class="skill-bar-bg" :style="{ width: 100 }"></div>

          <div class="skill-tags">
            <span v-for="tag in skill.tags" :key="tag" class="skill-tag">{{
              tag
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const skills = reactive([
  {
    name: "JavaScript",
    abbr: "JS",
    level: "Básico, intermedio",
    color: "#f0d060",
    description:
      "ES6+, manejo asíncrono con Promises y async/await, manipulación del DOM, consumo de APIs",
    tags: ["ES6+", "Async/Await", "DOM API", "Fetch API"],
    hovered: false,
  },
  {
    name: "HTML5",
    abbr: "H5",
    level: "Básico, intermedio",
    percent: 95,
    color: "#e8704a",
    description: "Estructura semántica, formularios",
    tags: ["Semántico", "Accesibilidad", "Forms"],
    hovered: false,
  },
  {
    name: "CSS3",
    abbr: "CSS",
    level: "Básico, intermedio",
    percent: 90,
    color: "#5b9cf6",
    description: "Flexbox, CSS Grid, animaciones, diseño responsive",
    tags: ["Flexbox", "Grid", "Animations", "Responsive"],
    hovered: false,
  },
  {
    name: "Bootstrap5",
    abbr: "B",
    level: "Básico, intermedio",
    percent: 82,
    color: "#73abf7",
    description: "Diseño responsive, layaouts, forms y componentes  ",
    tags: ["Responsive", "Grid", "Layout", "Forms", "Components"],
    hovered: false,
  },
  {
    name: "Vue.js",
    abbr: "Vue",
    level: "Básico, intermedio",
    percent: 82,
    color: "#4fc08d",
    description:
      "Composition API, Vue Router, Pinia para gestión de estado, componentes reutilizables, API fetch con Axios",
    tags: ["Composition API", "Pinia", "Vue Router", "Axios"],
    hovered: false,
  },
]);
</script>

<style scoped>
.skills-section {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 20px;
}

.skill-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 25px;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
  cursor: default;
}

.skill-card:hover {
  border-color: var(--skill-color);
  transform: translateY(-2px);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
}

.skill-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--skill-color) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--skill-color) 25%, transparent);
}

.skill-abbr {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  color: var(--skill-color);
}

.skill-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.skill-name {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-primary);
}

.skill-level {
  font-size: 12px;
  color: var(--color-text-muted);
}

.skill-pct {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
  color: var(--skill-color);
  opacity: 0.7;
}

.skill-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
  position: relative;
}

.skill-bar-bg {
  height: 3px;
  background: var(--skill-color);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 16px;
  position: relative;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  position: relative;
}

.skill-tag {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--skill-color) 8%, transparent);
  color: var(--skill-color);
  border: 1px solid color-mix(in srgb, var(--skill-color) 20%, transparent);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 420px;
  }
}
</style>
