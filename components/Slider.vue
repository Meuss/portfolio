<template>
  <div class="wrapper" :class="{swiperAlive: swiperAlive}">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    <div v-swiper:mySwiper="swiperOptions" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide card" v-for="(slide, index) in slides" :key="index">
          <div class="icons">
            <object
              v-for="(icon, iconindex) in slide.icons"
              :key="iconindex"
              type="image/svg+xml"
              class="dev-icon"
              :data="`/portfolio-icons/${icon}.svg`"
            ></object>
          </div>
          <div class="center">
            <div class="img" :style="{ backgroundImage: `url('${slide.src}')` }"></div>
            <h6 class="title">
              {{slide.title}}
              <span class="year">{{slide.year}}</span>
            </h6>
          </div>
          <a class="link" :href="slide.url">{{slide.urltxt}}</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head: {
    link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' }],
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' }],
  },
  data() {
    return {
      slides: [
        {
          url: 'https://google.ch/',
          urltxt: 'google.com',
          title: 'Google',
          src: '/portfolio-img/1.jpg',
          year: '2018',
          icons: ['bootstrap', 'kirby', 'jekyll', 'github-icon', 'javascript'],
        },
        {
          url: 'https://google.ch/',
          urltxt: 'codrops.org',
          title: 'Codrops',
          src: '/portfolio-img/2.jpg',
          year: '2018',
          icons: ['pug', 'npm'],
        },
        {
          url: 'https://google.ch/',
          urltxt: 'angular',
          title: 'Angularjs',
          src: '/portfolio-img/3.jpg',
          year: '2018',
          icons: ['javascript', 'es6', 'vue', 'nuxt'],
        },
        {
          url: 'https://google.ch/',
          urltxt: 'vscode.com',
          title: 'Visual Studio Code',
          src: '/portfolio-img/4.jpg',
          year: '2018',
          icons: ['cloudinary', 'visual-studio-code', 'sass', 'react'],
        },
      ],
      swiperOptions: {
        init: false,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        centeredSlides: true,
        spaceBetween: 100,
        speed: 1200,
        // allowTouchMove: false,
        keyboard: true,
      },
      swiperAlive: false,
    };
  },
  mounted() {
    const that = this;
    setTimeout(() => {
      that.swiperAlive = true;
      that.swiper.init();
    }, 1000);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  .swiper-container {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .progress {
    position: absolute;
    top: 400px;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &.swiperAlive {
    .swiper-container {
      opacity: 1;
    }
    .progress {
      opacity: 0;
    }
  }
}
.swiper-container {
  margin-left: -600px;
}
.swiper-wrapper {
  align-items: center;
  height: 600px;
  padding: 60px 0px;
  width: 100%;
  .swiper-slide {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    width: 300px !important;
    transition: all 0.7s ease-out;
    padding: 20px;
    border-radius: 15px;
    .img {
      padding-bottom: 56.25%;
      // height: 300px;
      background-size: cover;
      background-position: center center;
    }
    .center {
      width: 90%;
      transition: all 0.7s ease-out;
      filter: grayscale(1);
    }
    &.swiper-slide-active {
      width: 1000px !important;
      box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.1);
      .icons .dev-icon,
      .link,
      .title {
        opacity: 1;
      }
      .center {
        width: 60%;
        filter: grayscale(0);
      }
    }
  }
}
.icons .dev-icon,
.link,
.title {
  transition: opacity 0.3s ease;
  opacity: 0;
}
.link {
  align-self: flex-start;
}
.icons {
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  .dev-icon {
    width: 30px;
    height: 30px;
    fill: #333;
    // filter: grayscale(1);
    margin-right: 5px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
