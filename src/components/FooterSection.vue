<template>
  <footer class="footer">
    <span class="lb">{</span>Bárbara Quiroz · {{ new Date().getFullYear()
    }}<span class="lb">}</span>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: 20px;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-primary);
  justify-content: center;
  text-align: center;
}

.lb {
  color: var(--color-accent);
}
</style>
