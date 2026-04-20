<template>
  <section id="sobre-mi" class="section">
    <div class="container">
      <div class="section-over">Acerca de mí</div>
      <div class="about-grid">
        <div class="about-text-col">
          <p class="about-paragraph">
            Soy una nueva desarrolladora Front End, apasionada de la tecnología
            y el aprendizaje de nuevas herramientas. Mi enfoque como
            desarrolladora trainee ha sido la cración de interfaces funcionales
            e interactivas, respetando las buenas prácticas de responsividad y
            modularidad con un código mantenible.
          </p>
          <p class="about-paragraph">
            He estudiado y trabajado en campos como el Diseño industrial y la
            exportación maritima, lo que me ha permitido tener una experiencia
            diversa en la incorporación de conocimientos, adaptarme al entorno y
            participar con equipos diferentes de trabajo.
          </p>

          <div class="about-badges">
            <span v-for="badge in badges" :key="badge" class="badge">{{
              badge
            }}</span>
          </div>
        </div>

        <div class="about-stats-col">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "-", label: "Años de experiencia" },
  { value: "5", label: "Proyectos completados" },
  { value: "1", label: "Cursos relacionados completados" },
  { value: "100%", label: "Compromiso con cada proyecto" },
];

const badges = [
  "Responsive Design",
  "Performance",
  "Clean Code",
  "Component-Driven",
  "GitHub",
];
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 500px 400px;
  gap: 100px;
  align-items: start;
}

.about-paragraph {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 25px;
}

.badge {
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 99px;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  background: var(--color-surface);
  transition: all var(--transition);
}

.badge:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.about-stats-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 20px 32px;
  position: relative;
  overflow: hidden;
  transition: border-color var(--transition);
}

.stat-card:hover {
  border-color: var(--color-border-hover);
}

.stat-number {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 420px;
    gap: 32px;
  }
}
</style>
