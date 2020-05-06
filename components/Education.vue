<template>
  <section id="education">
    <h2>Education</h2>

    <ul>
      <li v-for="grade in grades" :key="grade.id" class="resume-item">
        <h3>{{ grade.course }}</h3>
        <span>{{ grade.college }} | {{ grade.period }}</span>
      </li>
    </ul>

    <div class="languages">
        <img
          v-for="language in languages"
          :key="language.id"
          :src="language.imageSrc"
          :alt="`${language.description} : ${language.level}`"
          class="flag"
          :title="`${language.description} : ${language.level}`"
        >
    </div>

    <h2>Papers</h2>
    <ul class="papers">
      <li v-for="paper in papers" :key="paper.id" class="resume-item">
        <h3><a :href="paper.link" target="blank" :title="paper.title">{{ paper.title }}</a></h3>
        <span>{{ paper.resource }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      grades: [
        {
          id: 1,
          course: 'Graduate Studies in Development of Multiplatform Applications',
          college: 'UNOESTE - Universidade do Oeste Paulista',
          period: '2016-2017',
        },
        {
          id: 2,
          course: 'BSc in Computer Science',
          college: 'FEMA – Fundação Educacional do Munícipio de Assis',
          period: '2008-2011',
        },
      ],
      languages: [
        {
          id: 1,
          imageSrc: 'http://www.worldometers.info/img/flags/small/tn_br-flag.gif',
          description: 'Portuguese',
          level: 'Native',
        },
        {
          id: 2,
          imageSrc: 'http://www.worldometers.info/img/flags/small/tn_uk-flag.gif',
          description: 'English',
          level: 'Advanced',
        },
        {
          id: 3,
          imageSrc: 'http://www.worldometers.info/img/flags/small/tn_fr-flag.gif',
          description: 'French',
          level: 'Intermediary',
        },
        {
          id: 4,
          imageSrc: 'http://www.worldometers.info/img/flags/small/tn_sp-flag.gif',
          description: 'Spanish',
          level: 'Intermediary',
        },
      ],
      papers: [
        {
          title: 'Aplicação do Paradigma de POA no desenvolvimento de sistemas',
          resource: 'NEA - Novas Edições Acadêmicas | ISBN: 978-613-9-67226-4 | Aug-2018',
          link: 'https://www.morebooks.de/store/pt/book/aplica%C3%A7%C3%A3o-do-paradigma-de-poa-no-desenvolvimento-de-sistemas/isbn/978-613-9-67226-4',
        },
        {
          title: 'Uso de Programação Orientada a Aspecto no Desenvolvimento de Aplicações que utilizam conceitos de Tecnologia Adaptativa',
          resource: 'Revista de Sistemas e Computação (RSC) - Universidade de Salvador (UNIFACS) | ISSN 2237-2903 | Feb-2012',
          link: 'http://www.revistas.unifacs.br/index.php/rsc/article/view/2067',
        },
        {
          title: 'Uso de Programação Orientada a Aspecto no Desenvolvimento de Aplicações que utilizam conceitos de Tecnologia Adaptativa',
          resource: 'Workshop de Tecnologia Adaptativa (WTA) - Universidade de São Paulo (USP) | Jan-2012',
          link: 'http://labs.rafaelcasachi.eti.br/old/uploads/arquivos/paper-usp.pdf',
        },
        {
          title: 'Aplicação dos Conceitos de Programação Orientada a Aspecto no Desenvolvimento de Sistemas de Informação',
          resource: 'Universidade do Norte do Paraná (UNOPAR) | Oct-2011',
          link: 'http://labs.rafaelcasachi.eti.br/old/uploads/arquivos/paper-unopar.pdf',
        },
        {
          title: 'Utilização do Paradigma de Programação Orientado a Aspecto na Otimização do Desenvolvimento de Softwares',
          resource: 'Fórum Científico - Fundação Educacional do Município de Assis (FEMA) | Sep-2011',
          link: 'http://labs.rafaelcasachi.eti.br/old/uploads/arquivos/paper-fema.pdf',
        },
      ],
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

.resume-item {
  margin-bottom: 32px;
}

.resume-item h3 {
  font-weight: 600;
  color: var(--color-secondary-normal);
  font-size: 18px;
}

.resume-item span {
  font-size: 13px;
  color: var(--color-text-accent);
  text-transform: uppercase;
}

.resume-item p {
  margin-top: 4px;
  white-space: pre-wrap;
  font-size: 17px;
}

.languages {
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
}

.languages img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 15px;
  vertical-align: middle;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.papers a {
  color: var(--color-secondary-normal);
}

.papers a:hover {
  color: var(--color-secondary-accent);
}
</style>
