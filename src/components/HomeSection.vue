<template>
  <section id="inicio" class="home">
    <div class="container home-inner">
      <div class="home-content">
        <h1 class="home-title animate-fade-up" style="animation-delay: 0.2s">
          Hola, soy<br />
          <div>
            <p class="home-name">Bárbara Quiroz</p>
          </div>
        </h1>

        <p class="home-role animate-fade-up" style="animation-delay: 0.3s">
          Desarrolladora <span class="role-highlight">Front End Trainee</span>
        </p>

        <p class="home-bio animate-fade-up" style="animation-delay: 0.4s">
          Apasionada por el mundo del desarrollo e interesada en el aprendizaje
          continuo. Como desarrolladora trainee me interesa la construcción de
          interfaces web modernas e interactivas, con el ecosistema del
          desarrollo FronEnd actual y herramientas de JavaScript y Vue.
        </p>

        <div class="home-actions animate-fade-up" style="animation-delay: 0.5s">
          <a href="#proyectos" class="btn btn-primary">
            Ver proyectos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </a>
          <a href="#contacto" class="btn btn-outline">Contactar</a>
        </div>
      </div>

      <div class="home-visual animate-fade-up" style="animation-delay: 0.3s">
        <div class="home-card">
          <div class="card-avatar">BQ</div>
          <div class="card-info">
            <span class="card-name">Barbara Quiroz</span>
            <span class="card-role">Frontend Developer</span>
          </div>
          <div class="card-tags">
            <span class="tech-tag js">JavaScript</span>
            <span class="tech-tag html">HTML5</span>
            <span class="tech-tag css">CSS3</span>
            <span class="tech-tag vue">Vue.js</span>
          </div>
          <div class="card-stats">
            <div class="mini-stat">
              <span class="mini-num">-</span>
              <span class="mini-label">Años exp.</span>
            </div>
            <div class="mini-stat">
              <span class="mini-num">1</span>
              <span class="mini-label">Cursos realizados</span>
            </div>
            <div class="mini-stat">
              <span class="mini-num">4</span>
              <span class="mini-label">Proyectos</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-scroll-hint">
      <div class="scroll-line"></div>
      <span>SCROLL</span>
    </div>
  </section>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 30px;
  position: relative;
}

.home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse 60% 50% at 70% 50%,
    rgba(232, 213, 163, 0.04) 0%,
    transparent 70%
  );
}

.home-inner {
  display: grid;
  grid-template-columns: 550px 380px;
  gap: 80px;
  align-items: center;
}

.home-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 90px);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.home-name {
  color: var(--color-accent);
  width: 0;
  overflow: hidden;
  border-right: 2px solid white;
  font-size: 85px;
  animation: typing 2s forwards;
}

/* Animacion nombre */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.home-role {
  font-family: var(--font-display);
  font-size: clamp(18px, 2.5vw, 26px);
  color: var(--color-text-secondary);
  font-weight: 400;
  margin-bottom: 25px;
}

.role-highlight {
  color: var(--color-text-primary);
  font-weight: 600;
}

.home-bio {
  font-size: 16px;
  color: var(--color-text-secondary);
  max-width: 480px;
  margin-bottom: 32px;
}

.home-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.home-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.card-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-accent-dim);
  border: 1px solid rgba(232, 213, 163, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-accent);
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.card-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  color: var(--color-text-primary);
}
.card-role {
  font-size: 13px;
  color: var(--color-text-muted);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 99px;
  border: 1px solid;
}

.tech-tag.js {
  color: var(--color-js);
  border-color: rgba(240, 208, 96, 0.3);
  background: rgba(240, 208, 96, 0.08);
}
.tech-tag.html {
  color: var(--color-html);
  border-color: rgba(232, 112, 74, 0.3);
  background: rgba(232, 112, 74, 0.08);
}
.tech-tag.css {
  color: var(--color-css);
  border-color: rgba(91, 156, 246, 0.3);
  background: rgba(91, 156, 246, 0.08);
}
.tech-tag.vue {
  color: var(--color-vue);
  border-color: rgba(79, 192, 141, 0.3);
  background: rgba(79, 192, 141, 0.08);
}

.card-stats {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
}

.mini-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.mini-num {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-primary);
}
.mini-label {
  font-size: 11px;
  color: var(--color-text-muted);
}

/* Scroll */
.home-scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--color-text-muted);
  font-size: 12px;
}

.scroll-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, transparent, var(--color-text-muted));
  animation: scrollDown 1.5s ease-in-out infinite;
}

@keyframes scrollDown {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@media (max-width: 900px) {
  .home-inner {
    grid-template-columns: 1fr;
  }
  .home-visual {
    display: none;
  }
}
</style>
