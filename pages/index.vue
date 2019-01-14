<template>
  <div class="page">
    <section class="landing">
      <h1>Thomas Miller</h1>
      <h2>{{ $t('I-build-websites') }}</h2>
      <landing-icons></landing-icons>
    </section>
    <section class="who">
      <h3>{{ $t('who.who-1') }}</h3>
      <p>{{ $t('who.who-2') }}</p>
      <p>{{ $t('who.who-3') }}</p>
      <p>{{ $t('who.who-4') }}</p>
    </section>
    <section class="what">
      <h3>What I do</h3>
      <button>Portfolio</button>
      <button>CV (pdf)</button>
      <p>These are some of the technologies I am currently using, or have used in the past.</p>
      <div class="tech-icons">Tech-icons</div>
    </section>
    <section class="love">
      <h3>What I love doing</h3>
      <p>
        I love building visually attractive websites, trying to make every project I build be better than the previous one.
        I use up-to-date technologies, focusing heavily on having a modern javascript workflow, using all the good stuff that comes with the latest versions such as ES6.
        I have a very good grasp on styling with CSS, creating responsive websites that work well in all browsers.
        I also really enjoy creating small animations and page transitions, mostly using Greensock, all while keeping performance in mind.
      </p>
      <p>
        I’m constantly checking forums, blog posts, following tutorials and listening to awesome podcasts to always be as current as I can be,
        because the field of frontend web development seems to be changing at a very fast pace.
      </p>
      <p>
        Right now (end of 2018), my main focus is creating websites using Vue.js to create my web apps.
        I’m currently building a few projects using Nuxt, to have all the SEO benefits of SSR (server-side rendering) as well.
        I’m trying to figure out what would be the best content management system to use together with Nuxt, to provide the best user experience for my clients,
        as well create an enjoyable development workflow for myself. I’ve been using a few different headless CMS,
        such as Prismic or the WordPress REST api. For my personnal projects I’ve been using Firebase.
      </p>
      <div class="love-icons">Love icons</div>
    </section>
  </div>
</template>

<script>
import LandingIcons from '@/components/LandingIcons';

export default {
  data() {
    return {};
  },
  components: {
    'landing-icons': LandingIcons,
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/styles/vars.scss';
.landing {
  padding: 100px 0px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $lightgray;
  h1,
  h2 {
    margin: 0;
  }
}
</style>
