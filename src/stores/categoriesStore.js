import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({ category: [] }),
  getters: {},
  actions: {
    async fetchCategory() {
      await fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => {
          this.category = data;
          console.log(data);
        });
    },
  },
});
