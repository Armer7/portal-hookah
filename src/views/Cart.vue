<template>
  <main class = "main-content">
    <div class = "cart-list">
      <h3 class = "cart__name">Ваш заказ:</h3>
      <div class = "cart__item">
        <div class = "cart__title">Чай авторский Цитрусовый</div>
        <div class = "cart__value">x1</div>
        <div class = "cart__price">48 грн</div>
      </div>
      <div class = "cart__item">
        <div class = "cart__title">Милкшейк</div>
        <div class = "cart__value">x1</div>
        <div class = "cart__price">40 грн</div>
      </div>
      <div class = "cart__item">
        <div class = "cart__title">Сумма:</div>
        <div class = "cart__price">88 грн</div>
      </div>
      <div class = "cart__item">
        <div class = "cart__title">Скидка:</div>
        <div class = "cart__price">10 грн</div>
      </div>
      <div class = "cart__result">Всего к оплате: <span>78</span> грн</div>
    </div>
    <p class = "cart__warn">* Оплата наличными только на баре</p>
    <button class = "cart__submit"> Оплатить онлайн</button>
  </main>

</template>

<script>
  export default {
  name: 'Cart',
}

</script>

<style scoped lang = 'scss'>

</style>
