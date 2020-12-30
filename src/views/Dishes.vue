<template>
  <main class="main-content">
    <div class="cards">
      <Card v-for="item in menuItem"
            :key="item.id"
            :item="item"
            @selectOrder="selectOrder"
      ></Card>

    </div>
    <ModalOrder v-if="onModalOrder" :orderId="orderId" @closeOrder = "closeOrder"/>
    <modal-message v-if="isModalVisible" @close="closeModal" :idModalState='idModalState'>
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
  name: 'Dishes',
  components: {
    ModalOrder,
    ModalMessage,
    Card
  },
  data() {
    return{
      type: 'dishes'
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


  /*data(){
    return{
      onModalOrder: false,
      orderId: null,
      idModalState: 0,
      isModalVisible: false,
      isModalText: 'К вам скоро подойдут!',
    };
  },
  methods: {
    selectOrder(index){
      this.orderId=index;
      console.log(this.orderId);
      this.onModalOrder = true;
    },
    closeOrder(stateSend) {
      this.onModalOrder = false;
      this.idModalState = stateSend;
      if(stateSend === 1){
        this.isModalText = 'Ваш заказ был успешно оформлен!';
      } else if (stateSend === 2){
        this.isModalText = 'При заказе произошла ошибка, повторите попытку.';
      }
      else {
        return false
      }
      this.isModalVisible = true;
    },
    closeModal() {
      this.idModalState = 0;
      this.isModalVisible = false;
    }
  }*/
}
</script>

<style scoped lang = 'scss'>

</style>
