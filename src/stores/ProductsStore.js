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
    getSortBy() {
      return (sortType, arr) => {
        switch (sortType) {
          case "mostVisited":
            return arr.sort((a, b) => a.views - b.views).reverse();
          case "newest":
            return arr.sort((a, b) => a.time_posted - b.time_posted).reverse();
          case "bestSelling":
            return arr.sort((a, b) => a.number_sold - b.number_sold).reverse();
          case "cheapest":
            return arr.sort((a, b) => {
              let realAPrice = a.Price - (a.Price * a.percentOfDiscount) / 100;
              let realBPrice = b.Price - (b.Price * b.percentOfDiscount) / 100;
              return realAPrice - realBPrice;
            });
          case "mostExpensive":
            return arr
              .sort((a, b) => {
                let realAPrice =
                  a.Price - (a.Price * a.percentOfDiscount) / 100;
                let realBPrice =
                  b.Price - (b.Price * b.percentOfDiscount) / 100;
                return realAPrice - realBPrice;
              })
              .reverse();

          default:
            return arr;
        }
      };
    },
    getBetweenPrices() {
      return (min, max, arr) => {
        let filtered = arr.filter((p) => {
          let realPrice = p.Price - (p.Price * p.percentOfDiscount) / 100;
          if (realPrice >= min && realPrice <= max) {
            return p;
          }
        });
        if (filtered[0]) {
          return filtered;
        } else {
          return ["محصولی با این قیمت برای نمایش وجود ندارد"];
        }
      };
    },
  },
  actions: {
    async fetchProducts() {
      await fetch("https://ultra-sincere-fern.glitch.me/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
        });
    },
  },
});
