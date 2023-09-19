<template>
  <div
    class="container flex flex-wrap items-center justify-between w-full gap-6 p-1 mx-auto my-16"
  >
    <template v-for="item in blogStore.blogs" :key="item.id">
      <BlogItem :data="item" />
    </template>
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";
import { useBlogsStore } from "../../stores/blogsStore";
export default {
  name: "Blog",
  data() {
    return {
      blogStore: useBlogsStore(),
    };
  },
  components: { BlogItem },
  created() {
    this.blogStore.fetchBlog();
  },
};
</script>
