import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogsStore", {
  state: () => ({ blogs: [] }),
  getters: {},
  actions: {
    async fetchBlog() {
      await fetch("https://ultra-sincere-fern.glitch.me/blogs")
        .then((res) => res.json())
        .then((data) => {
          this.blogs = data;
        });
    },
  },
});
