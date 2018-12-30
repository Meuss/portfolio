<template>
  <div class="site-container" :class="currentpage">
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' }],
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' }],
  },
  data() {
    return {};
  },
  computed: {
    currentpage() {
      return this.$route.name;
    },
  },
  components: {},
};
</script>

<style lang="scss">
@import '~/assets/styles/typo.scss';
.site-container {
  margin: 0 auto;
}
.site-container .page {
  min-height: 100vh;
}
section {
  padding: 100px 15%;
}
</style>
