<template>
  <div>
    <img :src="content.imageSrc" :alt="content.title">
    <span>{{ content.title }}</span>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style scoped>
div {
  display: inline-block;
  margin-right: 16px;
  margin-bottom: 8px;
  text-align: center;
}
img {
  height: 48px;
  width: auto;
  display: block;
  text-align: center;
}
span {
  font-weight: 600;
  color: var(--color-secondary-normal);
  text-align: center;
}
</style>
