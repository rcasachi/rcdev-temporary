<template>
  <header>
    <h1>Rafael Casachi</h1>
    <img :src="require('~/assets/images/me.png')" alt="Rafael Casachi">
    <i class="fas fa-bars main-menu" @click="$emit('toggle-menu')"></i>
    <i class="theme-menu" @click="$emit('toggle-theme')">{{ activeSymbol }}</i>
  </header>
</template>

<script>
export default {
  props: ['theme'],
  data: () => {
    const symbol = {
      dark: '🌓',
      light: '☀️',
      dracula: '👿',
    };

    return {
      activeSymbol: symbol.dark,
      symbol: symbol
    }
  },
  watch: {
    theme: function(val) {
      if(val === 'light') {
        this.activeSymbol = this.symbol.dark;
      } else if (val === 'dark') {
        this.activeSymbol = this.symbol.dracula;
      } else {
        this.activeSymbol = this.symbol.light;
      }
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  height: 100%;
  padding: 8px;
  width: 46px;
  background-color: var(--color-bg-normal);
}

h1 {
  position: fixed;
  left: 0;
  bottom: 0;
  padding-top: 12px;
  padding-left: 24px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-text-accent);
  font-size: 16px;
  transform-origin: 0 0;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  user-select: none;
}

img {
  width: 30px;
  position: fixed;
  bottom: 8px;
  border-radius: 50%;
}

.main-menu,
.theme-menu {
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  color: var(--color-text-accent);
  user-select: none;
}

.theme-menu {
  display: inline-block;
  font-style: normal;
  width: 16px;
  height: 16px;
  padding: 6px;
  font-size: 14px;
}

@media (min-width: 720px) {
  .main-menu {
    display: none;
  }
}
</style>
