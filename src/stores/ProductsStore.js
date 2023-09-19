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
      await fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
        });
    },
  },
});
