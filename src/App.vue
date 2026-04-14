<template>
  <div id="portfolio">
    <NavBar />
    <main>
      <HomeSection />
      <div class="section-divider"></div>
      <AboutSection />
      <div class="section-divider"></div>
      <SkillsSection />
      <div class="section-divider"></div>
      <ProjectsSection />
      <div class="section-divider"></div>
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
#portfolio {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main { flex: 1; }

</style>
