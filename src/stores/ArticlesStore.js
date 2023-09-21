import { defineStore } from "pinia";

export const useArticlesStore = defineStore("articlesStore", {
  state: () => ({ articles: [] }),
  getters: {
    articleForHome(stata) {
      return stata.articles.filter((a) => a.id < 5);
    },
  },
  actions: {
    async fetchArticles() {
      await fetch("https://ultra-sincere-fern.glitch.me/articles")
        .then((res) => res.json())
        .then((data) => {
          this.articles = data;
        });
    },
  },
});
