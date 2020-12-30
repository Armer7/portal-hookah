<template>
  <main class="main-content main-content--menu">
    <div class="menu">
      <router-link tag="a"
                   to = "/menu/drinks/coldDrinks"
                   class="menu__link"
      >Холодные напитки
      </router-link>
      <router-link tag="a"
                   to = "/menu/drinks/hotDrinks"
                   class="menu__link"
      >Горячие напитки
    </router-link>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'MainDrinksLayout',
  }
</script>

<style scoped lang = 'scss'>

</style>
