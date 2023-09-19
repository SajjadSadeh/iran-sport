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
      await fetch("http://localhost:3000/articles")
        .then((res) => res.json())
        .then((data) => {
          this.articles = data;
        });
    },
  },
});
