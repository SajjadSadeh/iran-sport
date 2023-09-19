<template>
  <div class="container mx-auto my-16">
    <h1 class="mb-8 text-xl font-bold text-center">محصولات ایران اسپرت</h1>
    <swiper
      :slidesPerView="3"
      :spaceBetween="10"
      :freeMode="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in categoryStore.category" :key="item.name">
        <div
          style="
            width: clamp(70px, 20vw, 150px);
            height: clamp(70px, 20vw, 150px);
          "
          class="flex flex-col items-center justify-center p-5 mb-8 text-center rounded-full shadow"
        >
          <div v-html="item.svg"></div>
          <p class="hidden sm:block">{{ item.name }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useCategoryStore } from "../stores/categoriesStore";
export default {
  name: "Category",
  data() {
    return {
      categoryStore: useCategoryStore(),
      modules: [FreeMode, Pagination],
    };
  },
  created() {
    this.categoryStore.fetchCategory();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped></style>
