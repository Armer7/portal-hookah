<template>
  <div id="app">
    <comment :is="layout">
      <router-view/>
    </comment>
  </div>
</template>

<script>

import MainLayout from '@/layouts/MainLayout';
import MenuLayout from '@/layouts/MenuLayout';
import {Directives} from '@/mixin/Directives';
export default {
  mixins: [Directives],
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    },
  },
  components: {
    MainLayout,
    MenuLayout
  },

};
</script>

<style lang="scss">
  @import "~@/assets/styles/style.scss";
  @import "~@/assets/styles/modal-order.scss";
</style>
