<template>
<comment :is="subLayout">
      <router-view/>
</comment>
</template>

<script>
  import MainDrinksLayout from '@/views/MainDrinksLayout'
  import DrinksLayout from '@/layouts/DrinksLayout'
export default {
  name: 'Drinks',
  components: {
    MainDrinksLayout,
    DrinksLayout
  },
  computed: {
    subLayout() {
      return (this.$route.meta.subLayout || 'main-drinks') + '-layout'
    },
  },
}
</script>

<style scoped lang = 'scss'>

</style>
