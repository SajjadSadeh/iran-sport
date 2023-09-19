import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogsStore", {
  state: () => ({ blogs: [] }),
  getters: {},
  actions: {
    async fetchBlog() {
      await fetch("http://localhost:3000/blogs")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.blogs = data;
        });
    },
  },
});
