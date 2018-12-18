<template>
  <div class="site-container">
    <HeaderComponent/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';

export default {
  data() {
    return {};
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.site-container {
  margin: 0 auto;
  // padding: 0px 10%;
}
body {
  min-height: 100vh;
  background-image: url('/desk.jpeg');
  background-size: cover;
  background-position: center center;
}
</style>
