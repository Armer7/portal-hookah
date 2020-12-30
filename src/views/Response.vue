<template>
  <main class="main-content main-response">
    <div class="cards">
      <div class="card">
        <div class="card__response">
          <div class="card__info-cont">
            <h2 class="card__response__title">Оставьте свой отзыв</h2>
            <textarea name=""
                      cols="30" rows="5"
                      class="order__comment order__comment__response-area"
                      placeholder="Ваш отзыв"
                      v-model="message"
            >
            </textarea>
          </div>
        </div>
        <button class="card__submit" type="submit" @click="sendResponse">Отправить</button>
      </div>
    </div>
        <modal-message v-if="isModalVisible" @close="closeModal" :idModalState='idModalState'>
      <template v-slot:text >
        {{isModalText}}
      </template>
    </modal-message>
  </main>
</template>

<script>
import ModalMessage from "@/components/modal/ModalMessage"
export default {
  name: 'Response',
  components: {
    ModalMessage
  },
  data() {
    return{
      message: '',
      isModalVisible: false,
      isModalText: 'Ваш отзыв принят!',
      idModalState: 0

    };
  },
  methods: {
    sendResponse() {
      if(this.message) {
        this.idModalState = 1;
        this.isModalText = 'Ваш отзыв принят!';
        this.isModalVisible = true;
      }
      else {
        this.idModalState = 2;
        this.isModalText = 'Вы ничего не написали!';
        this.isModalVisible = true;
      }

    },
    closeModal() {
      this.idModalState = 0;
      this.isModalVisible = false;
      this.message = '';
    }
  }
}
</script>

<style lang = 'scss'>

</style>
