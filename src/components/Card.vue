<template>
  <div class="card">
    <div class="card__info">
      <img :src="item.img" :alt="item.title" class="card__image">
      <div class="card__info-cont">
        <h2 class="card__title">{{item.title}}</h2>
        <p v-if="item.description"
          class="card__description"
        >{{item.description}}
        </p>
      </div>
    </div>
    <div class="card__price">{{item.weight}} / <span>{{item.price}} грн</span></div>
    <button class="card__submit" type="submit" @click="selectOrder">Заказать</button>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    selectOrder(){
      this.$emit('selectOrder', this.item.id)
    }
  }
}
</script>

<style lang = 'scss'>

</style>
