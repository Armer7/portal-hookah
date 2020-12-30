import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      "adds": {
        "dishes": [
          {
            "id": 1,
            "name": "Кетчуп",
            "price": 10,
            "item": 0
          },
          {
            "id": 2,
            "name": "Острый соус",
            "price": 10,
            "item": 0
          },
          {
            "id": 3,
            "name": "Кисло-сладкий соус",
            "price": 10,
            "item": 0
          },
          {
            "id": 4,
            "name": "Сырный соус",
            "price": 10,
            "item": 0
          },
          {
            "id": 5,
            "name": "Барбекю",
            "price": 10,
            "item": 0
          }
        ],
        "coldDrinks": [
          {
            "id": 1,
            "name": "Добавить льда",
            "price": 0,
            "item": 0
          }
        ]
      },
      "menuList": [
        {
          "id": 0,
          "type": "desserts",
          "title": "Маффин шоколадный",
          "description": "Мягкий маффин из шоколадного теста, посыпанный шоколадной крошкой.",
          "weight": "90 g",
          "price": 27,
          "item": 1,
          "img": require(`../assets/image/img/dessert-1.png`)
        },
        {
          "id": 1,
          "type": "desserts",
          "title": "Бельгийская вафля",
          "description": "Бельгийская вафля с шариком пломбир и шоколадный топпингом.",
          "weight": "220 g",
          "price": 80,
          "item": 1,
          "img": require(`../assets/image/img/dessert-2.png`)
        },
        {
          "id": 2,
          "type": "dishes",
          "title": "Куриные наггетсы",
          "description": "Свежее куриное филе в хрустящей оболочке + соус кетчуп.",
          "weight": "130+40 g",
          "price": 60,
          "item": 1,
          "img": require(`../assets/image/img/dish-1.png`)
        },
        {
          "id": 3,
          "type": "dishes",
          "title": "Бургер с телятиной “Тореадор”",
          "description": "Белая булочка, 100% телятина, салат айсберг, свежий помидор, сыр Чеддер, Крымский лук.",
          "weight": "300 g",
          "price": 85,
          "item": 1,
          "img": require(`../assets/image/img/dish-2.png`)
        },
        {
          "id": 4,
          "type": "coldDrinks",
          "title": "Лимонад в ассортименте",
          "description": "Лимонад на основе свежей мяты, лимона и газировки Sprite с добавлением сиропа на ваш выбор. (Уточнять у официанта)",
          "weight": "400 ml",
          "price": 35,
          "item": 1,
          "img": require(`../assets/image/img/cold-tea-1.png`)
        },
        {
          "id": 5,
          "type": "coldDrinks",
          "title": "Милкшейк в ассортименте",
          "description": "Молочный коктейль из 100% - процентного пломбира, молока, льда и сиропа на ваш выбор. (Уточнять у официанта)",
          "weight": "400 ml",
          "price": 40,
          "item": 1,
          "img": require(`../assets/image/img/cold-tea-2.png`)
        },
        {
          "id": 6,
          "type": "hotDrinks",
          "title": "Зеленый китайский чай “Храм неба”",
          "description": "",
          "weight": "500 ml",
          "price": 30,
          "item": 1,
          "img": require(`../assets/image/img/hot-tea-1.png`)
        },
        {
          "id": 7,
          "type": "hotDrinks",
          "title": "Чай авторский “Цитрусовый”",
          "description": "Чай зеленый, апельсин, лимон, грейпфрут, корица, кардамон",
          "weight": "500 ml",
          "price": 48,
          "item": 1,
          "img": require(`../assets/image/img/hot-tea-2.png`)
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    menu(state){
      return state.menu
    }
  }
})
