import { defineStore } from "pinia";

export const useBasketStore = defineStore("basketStore", {
  state: () => ({ basketItems: [] }),
  getters: {
    getTotalPrice() {
      let sum = 0;
      this.basketItems.forEach((p) => {
        sum += p.count * p.Price;
      });
      return sum;
    },

    getTotalDiscount() {
      let sum = 0;
      this.basketItems.forEach((p) => {
        sum += (p.count * p.Price * p.percentOfDiscount) / 100;
      });
      return sum;
    },
  },
  actions: {
    addNewItem(item) {
      let x = this.basketItems.find(
        (p) =>
          p.ID === item.ID &&
          p.chosedColor === item.chosedColor &&
          p.chosedSize === item.chosedSize
      );
      x === undefined ? this.basketItems.push(item) : x.count++;
      this.setBasketItemsToLocalStorage();
    },

    increaseCountProduct(item) {
      this.basketItems = this.basketItems.map((p) => {
        p === item ? p.count++ : null;
        return p;
      });
      this.setBasketItemsToLocalStorage();
    },

    reduceCountProduct(item) {
      this.basketItems = this.basketItems.map((p) => {
        p === item && p.count > 1 ? p.count-- : null;
        return p;
      });
      this.setBasketItemsToLocalStorage();
    },
    removeProductOfBasket(item) {
      console.log(item);
      this.basketItems = this.basketItems.filter((p) => p !== item);
      this.setBasketItemsToLocalStorage();
    },

    setBasketItemsToLocalStorage() {
      localStorage.setItem("basketItems", JSON.stringify(this.basketItems));
    },
    getLocalStorageValue() {
      JSON.parse(localStorage.getItem("basketItems"))
        ? (this.basketItems = JSON.parse(localStorage.getItem("basketItems")))
        : (this.basketItems = []);
    },
  },
});
