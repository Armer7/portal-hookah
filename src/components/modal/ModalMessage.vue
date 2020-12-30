<template>
  <div class="modal-cont"
       :class="infoColor[idModalState].modal_cont"><!--modal-cont--response  this green-->
    <div class="modal modal--response modal--message"
         :class="infoColor[idModalState].modal"><!-- this red modal--error + closest modal-cont--response-->
      <button class="modal__close" @click="close"></button>
      <div class="modal__text">
        <slot name="text">
          К вам уже идёт кальянщик!
        </slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ModalOfficiant',

  props: {
    idModalState:{
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      infoColor: [
        {
          modal_cont: '',
          modal: ''
        },
                {
          modal_cont: 'modal-cont--response',
          modal: ''
        },
                {
          modal_cont: 'modal-cont--response',
          modal: 'modal--error'
        },

      ],
    };
  },

  mounted() {
    let modal = document.querySelector('.modal-cont');
    modal.addEventListener('click', (e) => {
      if (!e.target.closest('.modal')) {
        this.$emit('close');
      }
    });
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style lang = 'scss'>

</style>
