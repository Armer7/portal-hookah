<template>
  <header class = "main-header">
    <div class = "main-header__manage">
      <router-link tag = "a"
                   :to = "backPath"
                   :class = "navClass"
      >
      </router-link>

      <router-link tag = "a"
                   to = "/"
      >
        <img src = "../assets/image/img/logo.png" alt = "логотип" class = "logo">
      </router-link>
      <router-link tag = "a"
                   to = "/cart"
                   class = "cart"
      >
        <div class = "cart__count">1</div>
      </router-link>
    </div>
    <router-view></router-view>

    <nav class = "main-nav">
      <router-link
        v-for = "link in links"
        :key = "link.url"
        tag = "a"
        active-class = "main-nav__link--active"
        :to = "(link.url)?link.url : drinkPath"
        :exact = "link.exact"
        class = "main-nav__link"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'MenuLayout',
    data() {
      return {
        navClass: 'main-page',
        links: [
          {name: "Основные блюда", url: "/menu/dishes", exact: true},
          {name: "Напитки", url: ""},
          {name: "Десерты", url: "/menu/desserts"},
        ],
      };
    },
    computed: {
      backPath() {
        if (this.$route.path !== "/") {
          this.navClass = 'main__link-back';
          let str = this.$route.path;
          let output = str.substring(0, str.lastIndexOf('/'));
          if (output) {
            return output
          } else {
            return '/'
          }
        } else {
          this.navClass = 'main-page';
          return '/'
        }
      },
      drinkPath() {
        if (this.$route.path === "/menu/dishes" || this.$route.path === "/menu/desserts") {
          return "/menu/drinks/coldDrinks"
        } else {
          return this.$route.path
        }
      }
    }
  }
</script>

<style scoped lang = 'scss'>

</style>
