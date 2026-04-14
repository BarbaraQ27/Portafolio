<template>
  <section id="contacto" class="section contact-section">
    <div class="container">
      <div class="section-over">Contacto</div>
      <h2 class="section-title">Trabajemos juntos</h2>

      <div class="contact">
        <div class="contact-info">
          <p class="contact-intro">
            Estoy disponible para nuevas oportunidades laborales, integrarme a
            equipos de trabajo, continuar desarrollando mis habilidades y poner
            mis conocimientos a disposición de los requerimientos del cliente.
          </p>

          <div class="contact-items">
            <a
              v-for="item in contactItems"
              :key="item.label"
              :href="item.href"
              target="_blank"
              class="contact-item"
            >
              <div class="contact-icon-wrap">
                <span v-html="item.icon"></span>
              </div>
              <div class="contact-detail">
                <span class="contact-label">{{ item.label }}</span>
                <span class="contact-value">{{ item.value }}</span>
              </div>
              <svg
                class="contact-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactItems = [
  {
    label: "Email",
    value: "b.quirozs27@gmail.com",
    href: "mailto:b.quirozs27@gmail.com",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4h14v10H2V4zm0 0l7 6 7-6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  },
  {
    label: "Ubicación",
    value: "Concepción, Chile",
    href: "#",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7.5" r="2.5" stroke="currentColor" stroke-width="1.2"/><path d="M9 1.5C5.96 1.5 3.5 3.96 3.5 7c0 4.5 5.5 9.5 5.5 9.5s5.5-5 5.5-9.5c0-3.04-2.46-5.5-5.5-5.5z" stroke="currentColor" stroke-width="1.2"/></svg>`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/barbara-quiroz-suazo-22b366403",
    href: "https://www.linkedin.com/in/barbara-quiroz-suazo-22b366403/",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.2"/><path d="M6 7v5M6 5.5v.01M9 12V9.5c0-1.1.9-2 2-2s2 .9 2 2V12M9 7v5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  },
  {
    label: "GitHub",
    value: "github.com/BarbaraQ27",
    href: "https://github.com/BarbaraQ27",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 3.31 2.15 6.12 5.12 7.12.38.07.51-.16.51-.36v-1.27c-2.1.46-2.54-.99-2.54-.99-.34-.87-.84-1.1-.84-1.1-.68-.47.05-.46.05-.46.76.05 1.16.78 1.16.78.67 1.15 1.76.82 2.19.63.07-.49.26-.82.47-1.01-1.66-.19-3.41-.83-3.41-3.69 0-.82.29-1.48.77-2-.08-.19-.33-.95.07-1.98 0 0 .63-.2 2.07.77A7.2 7.2 0 019 6.1c.64.01 1.29.09 1.89.26 1.44-.97 2.07-.77 2.07-.77.4 1.03.15 1.79.07 1.98.48.52.77 1.18.77 2 0 2.86-1.75 3.5-3.42 3.68.27.23.51.69.51 1.39v2.07c0 .2.13.44.52.36A7.507 7.507 0 0016.5 9c0-4.14-3.36-7.5-7.5-7.5z" fill="currentColor"/></svg>`,
  },
];
</script>

<style scoped>
.contact-section {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.contact {
  display: flex;
  gap: 50px;
  align-items: start;
}

.contact-intro {
  font-size: 15px;
  color: var(--color-text-secondary);
  margin-bottom: 32px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition);
  cursor: pointer;
}

.contact-item:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
}

.contact-item:hover .contact-arrow {
  opacity: 1;
  transform: translateX(2px);
}

.contact-icon-wrap {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--color-accent-dim);
  border: 1px solid rgba(232, 213, 163, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
}

.contact-detail {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.contact-label {
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.contact-value {
  font-size: 14px;
  color: var(--color-text-primary);
}

.contact-arrow {
  color: var(--color-text-muted);
  opacity: 0;
  transition: all var(--transition);
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
