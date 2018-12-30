<template>
  <div class="page">
    <Slider/>
  </div>
</template>

<script>
// import { TweenMax } from 'gsap';
import Slider from '@/components/Slider';

export default {
  data() {
    return {};
  },
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.site-container.portfolio .page {
  background-image: url('/desk.jpeg');
  background-size: cover;
  background-position: center center;
}
</style>
