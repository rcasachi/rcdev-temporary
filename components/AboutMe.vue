<template>
  <section id="about-me">
    <h2>{{ title }}</h2>
    <p>{{ firstParagraph }}</p>
    <img :src="imageSrc" alt="Rafael Casachi at Atacama Desert">
    <p>{{ secondParagraphStart }}<a :href="kungfuLink" target="blank" class="text">飛鶴派功夫</a>{{ secondParagraphEnd }}</p>
    <p>{{ lastParagraph }}</p>
  </section>
</template>

<script>

export default {
  data: () => {
    return {
      title: 'About me',
      firstParagraph: 'Hey there, my name is Rafael Casachi and I am brazilian. I am a software developer and I have graduated in Computer Science. I am a backpacker, a photographer and a supporter of Santos F.C. I have created this website to write about my interests and my insights.',
      imageSrc: 'http://labs.rafaelcasachi.eti.br/old/tim.php?src=uploads/settings/2016/09/1473854685.jpg&w=780&h=300',
      kungfuLink: 'https://www.feihokphaikungfuoficial.com/',
      secondParagraphStart: 'I am passionate about adventure traveling, italian food and sports. I like to practice ',
      secondParagraphEnd: ', running and others outdoor sports. I like to try some new experiences and I am a meditation adept. I also like to search about project management, management 3.0, productivity, how to live with less stress and how to increase the efficiency.',
      lastParagraph: 'I really love to read fantasy books, listen to the rock music or try to cook something in my spare times.',
    }
  }
}

</script>

<style scoped>
img {
  filter: var(--filter-image);
}
</style>
