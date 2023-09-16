<template>
  <div class="container mx-auto mt-24">
    <swiper
      effect="Creative"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <template v-for="i in [1, 2, 3, 4]" :key="i">
        <swiper-slide>
          <SliderItem
            :imageSrc="`src/assets/slider${i}.png`"
            :sliderNumber="i"
          />
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SliderItem from "./SliderItem.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderItem,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
