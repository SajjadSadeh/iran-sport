<template>
  <div
    class="container flex flex-wrap items-center justify-between w-full gap-6 p-1 mx-auto my-16"
  >
    <template v-for="imageSrc in imgSources" :key="imageSrc">
      <BlogItem :imageSrc="imageSrc" />
    </template>
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";
export default {
  name: "Blog",
  data() {
    return {
      imgSources: [
        "src/assets/blog images/blog-image (1).png",
        "src/assets/blog images/blog-image (2).png",
        "src/assets/blog images/blog-image (3).png",
        "src/assets/blog images/blog-image (4).png",
      ],
    };
  },
  components: { BlogItem },
};
</script>
