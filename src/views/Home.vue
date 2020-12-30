<template>
  <main class="main-content main-content--menu-start">
    <div class="menu">
      <router-link tag="a"
                   to = "/menu"
                   class="menu__link"
      >Меню
      </router-link>
      <router-link tag="a"
                   to = "/games"
                   class="menu__link"
                   :data-new="newGame"
      >Игры
      </router-link>
      <a class="menu__link"  @click="showModal('К вам уже идет кальянщик!')">Позвать кальянщика</a>
      <a class="menu__link"  @click="showModal('К вам уже идет официант!')">Позвать официанта</a>
      <router-link tag="a"
                   to = "/response"
                   class="menu__link"
      >Оставить отзыв
      </router-link>
    </div>
    <modal-message v-if="isModalVisible" @close="closeModal" :idModalState='idModalState'>
      <template v-slot:text>
        {{isModalText}}
      </template>
    </modal-message>
  </main>
</template>

<script>
  import ModalMessage from "@/components/modal/ModalMessage"
  export default {
    name: 'Home',
    components: {
      ModalMessage
    },
    data () {
      return {
        idModalState: 0,
        isModalVisible: false,
        isModalText: 'К вам скоро подойдут!',
        newGame: true,
      };
    },
    methods: {
      showModal(value) {
        this.idModalState = 0;
        this.isModalText = value;
        this.isModalVisible = true;
      },
      closeModal() {
        this.idModalState = 0;
        this.isModalVisible = false;
      }
    },
  }
</script>

<style scoped lang = 'scss'>

</style>
