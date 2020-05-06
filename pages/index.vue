<template>
  <div class="container">
    <AboutMe></AboutMe>

    <Experience></Experience>

    <Education></Education>

    <Contact></Contact>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default {
  components: {
    AboutMe,
    Experience,
    Education,
    Contact,
  },
  head() {
    return {
      title: 'Rafael Casachi'
    }
  }
}
</script>

<style>
.container {
  padding: 8px;
  margin-left: 40px;
}

@media (min-width: 720px) {
  .container {
    margin-left: 324px;
  }
}
</style>
