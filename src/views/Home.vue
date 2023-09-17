<template>
  <div>
    <Slider />
  </div>
  <div>
    <Category />
  </div>
  <div>
    <ShoesInhomePage />
  </div>
  <div>
    <Blog />
  </div>
  <div>
    <Brands />
  </div>
  <div>
    <Article />
  </div>
  <div>
    <Representation />
  </div>
</template>

<script>
import Slider from ".././components/slider/Slider.vue";
import Category from ".././components/Category.vue";
import ShoesInhomePage from "../components/ShoesInhomePage.vue";
import Blog from ".././components/blog/Blog.vue";
import Brands from ".././components/Brands.vue";
import Article from "../components/article/Article.vue";
import Representation from "../components/Representation.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Slider,
    Category,
    ShoesInhomePage,
    Blog,
    Brands,
    Article,
    Representation,
  },
};
</script>
