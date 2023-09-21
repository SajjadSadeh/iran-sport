import { defineStore } from "pinia";

export const useSliderStore = defineStore("sliderStore", {
  state: () => ({ slider: [] }),
  getters: {},
  actions: {
    async fetchSlider() {
      await fetch("https://ultra-sincere-fern.glitch.me/sliders")
        .then((res) => res.json())
        .then((data) => {
          this.slider = data;
        });
    },
  },
});
