<template>
  <div class="mb-6">
    <Header />
  </div>
  <div>
    <Slider />
  </div>
  <div>
    <Category />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/slider/Slider.vue";
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Header,
    Slider,
    Category,
  },
};
</script>
