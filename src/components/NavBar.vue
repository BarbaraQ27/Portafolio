<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-inner">
      <a href="#inicio" class="navbar-logo">
        <img src="/Logo.gif" />
      </a>

      <nav class="navbar-links">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const activeSection = ref("inicio");

const links = [
  { href: "#inicio", id: "inicio", label: "Inicio" },
  { href: "#sobre-mi", id: "sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", id: "habilidades", label: "Habilidades" },
  { href: "#proyectos", id: "proyectos", label: "Proyectos" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;

  const sections = links
    .map((l) => document.getElementById(l.id))
    .filter(Boolean);
  for (const section of [...sections].reverse()) {
    if (window.scrollY >= section.offsetTop - 120) {
      activeSection.value = section.id;
      break;
    }
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px 0;
  z-index: 100;
  transition: all var(--transition);
}

.navbar.scrolled {
  background: rgba(12, 12, 15, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  padding: 5px 0;
}

.navbar-inner {
  display: flex;
  align-items: center;
  gap: 36px;
}

.navbar-logo img {
  width: 8vw;
  border-radius: 20px;
}

.navbar-links {
  margin-left: 10vw;
  display: flex;
  gap: 15px;
  align-items: center;
}

.nav-link {
  font-size: 13px;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  font-weight: 400;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text-primary);
}

.nav-link.active {
  background: var(--color-accent-dim-2);
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
}
</style>
