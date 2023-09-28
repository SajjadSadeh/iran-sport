<template>
  <div class="container p-1 mx-auto my-16" data-aos="fade-left">
    <swiper
      effect="Creative"
      :pagination="true"
      :modules="modules"
      class="mySwiper rounded-2xl"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <template v-for="item in sliderStore.slider" :key="item.id">
        <swiper-slide>
          <SliderItem :data="item" />
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
import { Pagination, Autoplay } from "swiper/modules";
import { useSliderStore } from "../../stores/SlidersStore";
export default {
  data() {
    return {
      sliderStore: useSliderStore(),
      modules: [Pagination, Autoplay],
    };
  },
  created() {
    this.sliderStore.fetchSlider();
  },
  components: {
    Swiper,
    SwiperSlide,
    SliderItem,
  },
};
</script>
