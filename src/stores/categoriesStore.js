import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({ category: [] }),
  getters: {},
  actions: {
    async fetchCategory() {
      await fetch("https://ultra-sincere-fern.glitch.me/categories")
        .then((res) => res.json())
        .then((data) => {
          this.category = data;
        });
    },
  },
});
