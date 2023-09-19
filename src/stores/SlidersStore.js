import { defineStore } from "pinia";

export const useSliderStore = defineStore("sliderStore", {
  state: () => ({ slider: [] }),
  getters: {},
  actions: {
    async fetchSlider() {
      await fetch("http://localhost:3000/sliders")
        .then((res) => res.json())
        .then((data) => {
          this.slider = data;
          console.log(data);
        });
    },
  },
});
