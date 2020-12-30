<template>
        <main class="main-content">
            <div class="product-props">
              <router-link
                v-for = "link in links"
                :key = "link.url"
                tag = "a"
                active-class = "product-type--current"
                :to = "link.url"
                :exact = "link.exact"
                class="product-type"
              >{{ link.name }}
        </router-link>
            </div>
            <router-view></router-view>
        </main>
</template>

<script>
export default {
  name: 'DrinksLayout',
  components: {},
  data() {
    return {
      links: [
        { name: "Холодные напитки", url: "/menu/drinks/coldDrinks", exact: true },
        { name: "Горячие напитки", url: "/menu/drinks/hotDrinks" },

      ],
    }
  }
}
</script>

<style lang = 'scss'>

</style>
