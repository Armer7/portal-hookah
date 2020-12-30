<template>
  <!--  Модальное окно для принятия заказа-->
  <div class="modal-cont">
    <div class="modal order">
      <p class="order__name">Ваш заказ:</p>
      <h3 class="order__title">{{menuItem.title}}</h3>
      <img class="order__image" :src="menuItem.img" alt="картинка товара">
      <div class="count">
        <div class="count__decrement" @click="itemDecrement(menuItem)"></div>
        <div class="count__current">{{menuItem.item}}</div>
        <div class="count__increment" @click="itemIncrement(menuItem)"></div>
      </div>
      <div class="order__addons order__addons--reverse">
        <button class="card__submit--order" @click="sendOrder">Подтвердить</button>
        <!-- Раздел соусов высвечивается  при нажатии в окне добавления соусов
      и при соответствующем типе заказываемого блюда -->
        <div class="order__sauce-cont"
             v-if="(menuItem.type === 'dishes' && onSauce)"
        >
          <div v-for="(sauce, index) in adds.dishes"
               :key="sauce.id"
            class="order__sauce-item">
            <div class="order__sauce-title">{{sauce.name}} (+{{sauce.price}} грн)</div>
            <div class="count count--dark">
              <div class="count__decrement" @click="itemDecrement(sauce)"></div>
              <div class="count__current">{{sauce.item}}</div>
              <div class="count__increment" @click="itemIncrement(sauce)"></div>
            </div>
          </div>

        </div>
        <div class="order__sauce-add"
             :class="{'order__sauce-add--opened': onSauce}"
             v-if="(menuItem.type === 'dishes')"
             @click="onSauce = true"
        >
          <div class="order__sauce" >Выбрать соус (+10 грн)</div>
        </div>
        <div class="ice" v-if="menuItem.type === 'coldDrinks'">
          <div class="ice__name">Добавить льда</div>
          <div class="count count--dark">
            <div class="count__decrement" @click="itemDecrement(adds.coldDrinks[0])"></div>
            <div class="count__current">{{adds.coldDrinks[0].item}}</div>
            <div class="count__increment"  @click="itemIncrement(adds.coldDrinks[0])"></div>
          </div>
        </div>
        <!-- окно добавления комментария  -->
        <textarea v-if="onComment"

                  @blur="writeComment"
                  cols="30" rows="1"
                  class="order__comment order__comment-area"
                  placeholder="Добавить комментарий"
                  v-model="menuItem.comment"
                  v-focus
        ></textarea>
        <div
          class="order__comment-add"
             :class="{hide: onComment}"
             @click="openComment">
          <div class="order__comment">Добавить комментарий</div>
        </div>
        <div class="order__price">Цена: {{menuItem.price}} грн</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'ModalOrder',
    props: {
      orderId: { // Id из базы меню, переданное от родителя
        type: Number,
        default: null
      }
    },
    data() {
      return{
        onSauce: false,   // флаг отображения формы выбора соусов
        onComment: false, // флаг отображения формы ввода комментариев
      }
    },
    computed:{
      ...mapGetters([
        'menu', //список меню и добавок из базы
      ]),
      menuItem() {
        return this.menu.menuList[this.orderId] //список меню
      },
      adds() {
        return this.menu.adds //список добавок
      },
    },
    mounted() {
      let modal = document.querySelector('.modal-cont'); //реагируем на щелчек за пределами модального окна
      modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
          this.$emit('closeOrder', 3) //и закрываем модалу, если щелкнули за пределами модалки
        }
      });
    },

    methods: {
      writeComment() {
        // Проверяем ,если потеряли фокус, и не
        // ввели текст, то прячем форму ввода комментариев
        if(!this.menuItem.comment){
          this.onComment = false
        }
      },
      openComment(){
        this.onComment = true //открываем окно ввода комментариев
      },
      itemDecrement(items) {
        items.item = (items.item - 1) > 0 ? items.item - 1 : 0; //уменьшение колличества компонентов в заказе
      },
      itemIncrement(items) {
        items.item ++ //увеличение колличества компонентов в заказе
      },
      sendOrder() { //отправляем ордер
        let stateSend = null;  //флаг состояния заказа
        if(this.menuItem.item > 0){ //если что-то заказываем, то
          const value = JSON.parse(JSON.stringify({ // собираем объект для ордера заказа
            menuItem: this.menuItem,
            adds: this.adds
          }));
          console.log(value);
          stateSend = 1; //флаг успешного заказа
          //сбрасываем значения кешируемых вычисляемых свойств на случай если в базе ничего не поменялось
          this.menuItem.item=1;
          this.adds.coldDrinks.forEach(value => {value.item = 0});
          this.adds.dishes.forEach(value => {value.item = 0});
          this.menuItem.comment = '';


        } else {
          stateSend = 2 //ошибка заказа (количество в заказе 0)
        }
        this.$emit('closeOrder', stateSend) //закрываем модалку и передаем флаг состояния заказа
      }

    }
  }
</script>

<style scoped lang = 'scss'>

.active{
  display: block;
}
.hide{
  display: none;
}
</style>
