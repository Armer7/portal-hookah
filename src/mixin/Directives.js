export const Directives = {
  directives: {
    focus: {
      // определение директивы
      inserted: function (el) {
        el.focus()
      }
    }
  }
};
