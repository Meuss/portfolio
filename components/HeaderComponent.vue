<template>
  <header>
    <MenuComponent/>
  </header>
</template>

<script>
import MenuComponent from '@/components/MenuComponent';

export default {
  data() {
    return {};
  },
  components: {
    MenuComponent,
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
