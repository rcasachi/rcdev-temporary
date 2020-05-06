<template>
  <div div="wrapper" :data-theme="theme">
    <Bar
      v-on:toggle-menu="toggleMenu = !toggleMenu"
      v-on:toggle-theme="toggleTheme()"
      :theme="theme"
    />
    <main>
      <Menu :open="toggleMenu" v-on:close-menu="closeMenu()" />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Bar from "../components/Bar";
import Menu from "../components/Menu";

export default {
  components: {
    Bar,
    Menu
  },
  data: () => {
    return {
      toggleMenu: false,
      windowWidth: 0,
      theme: 'light'
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    closeMenu() {
      this.toggleMenu = this.windowWidth < 720 ? false : true;
    },
    toggleTheme() {
      if(this.theme === 'light') {
        this.theme = 'dark';
      } else if (this.theme === 'dark') {
        this.theme = 'dracula';
      } else {
        this.theme = 'light';
      }
    }
  },
  watch: {
    windowWidth(newValue, oldValue) {
      this.toggleMenu = newValue < 720 ? false : true;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth;
      this.toggleMenu = this.windowWidth < 720 ? false : true;
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style>
:root {
  --color-bg-normal: #fff;
  --color-bg-accent: #f6f1ff;
  --color-text-normal: #111;
  --color-text-accent: #232323;
  --color-primary-normal: #5431a2;
  --color-primary-accent: #432781;
  --color-secondary-normal: #607b8d;
  --color-secondary-accent: #9e9eae;
  --color-danger-normal: #f44336;
  --color-danger-accent: #ff5722;
  --color-success-normal: #4caf50;
  --color-success-accent: #5dc34a;
  --color-info-normal: #00bcd4;
  --color-info-accent: #2196f3;
  --color-warning-normal: #ff9800;
  --color-warning-accent: #ffc107;
  --filter-image: sepia(1);
}

[data-theme="dracula"] {
  --color-bg-normal: #151320;
  --color-bg-accent: #22212c;
  --color-text-normal: #f8f8f2;
  --color-text-accent: #f2f1ec;
  --color-primary-normal: #6f669c;
  --color-primary-accent: #403b5b;
  --color-secondary-normal: #44414c;
  --filter-image: grayscale(.75);
}

[data-theme="dark"] {
  --color-bg-normal: #131217;
  --color-bg-accent: #191a1f;
  --color-text-normal: #aaa;
  --color-text-accent: #5b5a5f;
  --filter-image: grayscale(.85);
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--color-bg-normal);
}

body,
main {
  background-color: var(--color-bg-normal);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  padding: 16px;
}

h2 {
  display: block;
  padding-bottom: 16px;
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  color: var(--color-primary-normal);
  letter-spacing: 1px;
}

p {
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: 300;
  color: var(--color-text-normal);
}

a {
  color: var(--color-primary-normal);
  text-decoration: none;
  font-weight: 600;
  border-radius: 3px;
}

a.text:hover {
  background: rgba(84, 49, 162, .05);
}

img {
  width: 100%;
  border-radius: 3px;
  margin: 8px 0;
}
</style>
