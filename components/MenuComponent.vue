<template>
  <ul class="menu">
    <li>
      <nuxt-link to="/">home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about">about</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/portfolio">portfolio</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">contact</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  padding-left: 0;
  li {
    list-style-type: none;
    padding: 5px 10px;
    border-right: 1px solid white;
  }
}
</style>
