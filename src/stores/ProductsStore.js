import { defineStore } from "pinia";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({ products: [] }),
  getters: {
    getByCategory(stata) {
      return (categoryPass) =>
        stata.products.filter((p) => p.category === categoryPass);
    },
    getProductByID(stata) {
      return (ID) => stata.products.find((p) => p.ID === ID);
    },
  },
  actions: {
    async fetchProducts() {
      await fetch("../../db.json")
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
        });
    },
  },
});
