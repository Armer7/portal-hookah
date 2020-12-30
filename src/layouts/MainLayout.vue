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

    <nav class = "main-nav" v-if = "this.$route.path === '/cart'">
      <router-link tag = "a"
                   to = "/cart"
                   class = "main-nav__link main-nav__link--active"
      >
        Ваш заказ
      </router-link>
    </nav>
    <nav class = "main-nav" v-if = "this.$route.path === '/games'">
      <router-link tag = "a"
                   to = "/games"
                   class = "main-nav__link main-nav__link--active"
      >
        Игры
      </router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        navClass: 'main-page'
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
    }
  }
</script>

<style scoped lang = 'scss'>

</style>
