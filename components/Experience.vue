<template>
  <section id="experience">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="experience in experiences" class="resume-item" :key="experience.id">
        <h3>{{ experience.company }}</h3>
        <span>{{ experience.position }}  |  {{ experience.period }}</span>
        <p>{{ experience.description }}</p>
      </li>
    </ul>

    <div class="skills">
      <Skill v-for="skill in skills" :key="skill.title" :content="skill"></Skill>
    </div>
  </section>
</template>

<script>
import Skill from '../components/Skill';

export default {
  components: {
    Skill,
  },
  data: () => {
    return {
      title: 'Experience',
      experiences: [
        {
          id: 6,
          company: 'Olist',
          position: 'Front-end Developer',
          period: 'May, 2020 - Present',
          description:
            `Developed applications with Django and ReactJS`,
        },
        {
          id: 5,
          company: 'Aidias',
          position: 'Freelancer',
          period: 'April, 2014 - Present',
          description: 'Developed applications and websites with PHP, ASP.Net, Javascript, jQuery, ReactJS, VueJS and Ionic.',
        },
        {
          id: 4,
          company: 'Penze',
          position: 'Project Manager',
          period: 'March, 2018 - May, 2020',
          description:
            `- Managed the development team and new innovations projects.\n- Implemented project management techniques like PMBOK, SCRUM and AGILE principles.\n- Redesigned a new development workflow and business strategy.\n- Structured a new company core business to adapt to Digital Transformation.\n- Developed applications in ReactJS, Angular, VueJS and Laravel.`,
        },
        {
          id: 3,
          company: 'Penze',
          position: 'Fullstack Developer',
          period: 'December, 2017 - March, 2018',
          description: 'Developed applications in PHP, Laravel, Javascript, Angular and Cordova.',
        },
        {
          id: 2,
          company: 'Raízen S/A - Maracaí',
          position: 'Planning Analyst',
          period: 'October, 2011 - September, 2015',
          description:
            `- Implemented PMBOK techniques on Planning Department.\n- Managed the Planning Department.\n- Controlled projects’ costs and budgets, processes and information integrity.\n- Created internal procedures for continuous improvement of the company.`,
        },
        {
          id: 1,
          company: 'Raízen S/A - Maracaí',
          position: 'Planning And Control Analyst',
          period: 'May, 2010 - October, 2010',
          description:
            `- Planned and controlled maintenance projects.\n- Designed statistical indicators about maintenance and project efficiency.\n- Controlled the acquisitions of services and materials for the projects.\n- Automated manual tasks with the development of applications in PHP and Javascript.`,
        },
      ],
      skills: [
        { title: 'HTML5', imageSrc: require('~/assets/images/html5.png') },
        { title: 'CSS3', imageSrc: require('~/assets/images/css3.png') },
        { title: 'Javascript', imageSrc: require('~/assets/images/javascript.png') },
        { title: 'Angular', imageSrc: require('~/assets/images/angular.png') },
        { title: 'ReactJs', imageSrc: require('~/assets/images/reactjs.png') },
        { title: 'VueJs', imageSrc: require('~/assets/images/vuejs.png') },
        { title: 'Laravel', imageSrc: require('~/assets/images/laravel.png') },
        { title: 'NodeJs', imageSrc: require('~/assets/images/nodejs.png') },
        { title: 'React Native', imageSrc: require('~/assets/images/reactnative.png') },
      ]
    }
  }
}

</script>

<style scoped>
ul {
  list-style: none;
  border-left: 3px solid rgba(84, 49, 162, .2);
  padding-left: 16px;
}

.resume-item {
  margin-bottom: 32px;
}

.resume-item:before {
  content: '\2022';
  position: absolute;
  margin-left: -23px;
  font-size: 30px;
  vertical-align: text-top;
  color: rgba(84, 49, 162, .8);
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

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
