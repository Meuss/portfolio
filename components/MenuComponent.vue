<template>
  <nav class="container">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <nuxt-link to="/">home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">about</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/portfolio">portfolio</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
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
