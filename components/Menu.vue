<template>
  <nav v-if="open">
    <li><a href="#about-me" title="About Me" @click="$emit('close-menu')">about me</a></li>
    <li><a href="#experience" title="Experience"  @click="$emit('close-menu')">experience</a></li>
    <li><a href="#education" title="Education"  @click="$emit('close-menu')">education</a></li>
    <li><a href="#contact" title="Let's Talk"  @click="$emit('close-menu')">let's talk</a></li>
  </nav>
</template>

<script>
export default {
  props: ['open']
}
</script>

<style scoped>
nav {
  background-color: var(--color-bg-normal);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 46px;
  padding-bottom: 48px;
  padding-left: 32px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
}

li {
  list-style: none;
  padding: 8px 16px;
}

a {
  font-size: 28px;
  font-weight: 300;
}

@media (min-width: 720px) {
  nav {
    width: 284px;
    padding-left: 48px;
  }
  li {
    padding: 0;
  }
  a {
    color: var(--color-text-accent);
  }
  a:hover {
    color: var(--color-primary-normal);
  }
}
</style>
