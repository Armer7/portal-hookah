<template>
  <main class="">
    <div class = "cards">
      <Card v-for = "item in menuItem"
            :key = "item.id"
            :item = "item"
            @selectOrder = "selectOrder"
      ></Card>

    </div>
    <ModalOrder v-if = "onModalOrder" :orderId = "orderId" @closeOrder = "closeOrder"/>
    <modal-message v-if = "isModalVisible" @close = "closeModal" :idModalState = 'idModalState'>
      <template v-slot:text>
        {{isModalText}}
      </template>
    </modal-message>
  </main>
</template>

<script>
  import ModalOrder from '@/components/modal/ModalOrder';
  import ModalMessage from '@/components/modal/ModalMessage';
  import {mapGetters} from 'vuex';
  import {ModalEvents} from '@/mixin/ModalEvent';
  import Card from '@/components/Card';
  export default {
    mixins: [ModalEvents],
    name: 'HotDrinks',
    components: {
      ModalOrder,
      ModalMessage,
      Card
    },
    data() {
      return{
        type: 'hotDrinks'
      };
    },
    computed: {
      ...mapGetters([
        'menu', //список меню и добавок из базы
      ]),
      menuItem() {
        return this.menu.menuList.filter(value => (value.type === this.type)) //список меню
      },
    },
  }
</script>

<style scoped lang = 'scss'>

</style>
