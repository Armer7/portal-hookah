<template>
  <main class="main-content main-content--menu">
    <div class="menu">
      <router-link tag="a"
                   to = "/menu/dishes"
                   class="menu__link"
      >Основные блюда
      </router-link>
      <router-link tag="a"
                   to = "/menu/drinks"
                   class="menu__link"
      >Напитки
      </router-link>
      <router-link tag="a"
                   to = "/menu/desserts"
                   class="menu__link"
      >Десерты
      </router-link>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'MainMenu',
}
</script>

<style lang = 'scss'>

</style>
