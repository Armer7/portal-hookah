export const ModalEvents = {
  data(){
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
  }
};
