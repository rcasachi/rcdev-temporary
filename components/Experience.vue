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
        { title: 'HTML5', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
        { title: 'CSS3', imageSrc: 'data:image/png;base64,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' },
        { title: 'Javascript', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
        { title: 'Angular', imageSrc: 'https://angular.io/assets/images/logos/angular/angular.svg' },
        { title: 'ReactJs', imageSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' },
        { title: 'VueJs', imageSrc: 'https://vuejs.org/images/logo.png' },
        { title: 'Laravel', imageSrc: 'https://laravel.com/img/logomark.min.svg' },
        { title: 'NodeJs', imageSrc: 'https://i0.wp.com/codigosimples.net/wp-content/uploads/2017/03/nodejs.png?fit=500%2C500&ssl=1' },
        { title: 'SpringBoot', imageSrc: 'https://spring.io/images/spring-initializr-4291cc0115eb104348717b82161a81de.svg' },
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
