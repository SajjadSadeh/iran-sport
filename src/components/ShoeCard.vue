<template>
  <div
    class="flex w-[200px] lg:w-[250px] flex-col items-center justify-between gap-2 px-4 py-2 mb-10 text-center bg-white rounded shadow"
  >
    <!-- {{ data}} -->
    <img class="w-3/4" :src="data.Shoe_Main_Image" alt="" />
    <router-link :to="'store/product/' + data.ID">
      <p class="text-sm font-semibold md:text-base text-firstGray">
        {{ data.Shoe_Name }}
      </p>
    </router-link>

    <!-- price -->
    <div
      class="flex items-center gap-3 sm:flex-col sm:gap-0"
      v-if="data.percentOfDiscount === 0"
    >
      <p class="text-sm text-firstOrange sm:text-base">
        {{ data.Price.toLocaleString() }} تومان
      </p>
      <p class="text-sm line-through opacity-0 text-SecondGray">.....</p>
    </div>
    <div class="flex items-center gap-3 sm:flex-col sm:gap-0" v-else>
      <p class="text-sm text-firstOrange sm:text-base">
        {{
          (
            data.Price -
            (data.Price * data.percentOfDiscount) / 100
          ).toLocaleString()
        }}
        تومان
      </p>
      <p class="text-xs line-through sm:text-sm text-SecondGray">
        {{ data.Price.toLocaleString() }} تومان
      </p>
    </div>
    <!-- price end -->

    <div class="flex flex-row items-center gap-4 md:flex-col">
      <p class="text-xs text-SecondGray">
        {{ data.Shoe_Features.Sole_Material }} ,

        {{ data.category }}
      </p>
      <button
        @click="addToBasket"
        class="flex items-center justify-center w-8 h-8 text-3xl rounded-full bg-firstOrange md:hidden"
      >
        +
      </button>
      <button
        @click="addToBasket"
        class="hidden px-4 py-1 text-black transition-all rounded hover:px-8 bg-firstOrange md:flex"
      >
        + افزودن
      </button>
    </div>
  </div>
</template>

<script>
import { useBasketStore } from "../stores/BasketStore";
import Swal from "sweetalert2";
export default {
  name: "ShoeCard",
  props: ["data"],
  data() {
    return {
      basketStore: useBasketStore(),
      l: localStorage.basketItems,
    };
  },

  watch: {
    l: {
      deep: true,
      handler() {
        console.log(5);
      },
    },
  },
  methods: {
    addToBasket() {
      this.basketStore.addNewItem({
        ...this.data,
        chosedColor: this.data.Shoe_Colors[0],
        chosedSize: this.data.Shoe_Sizes[0],
        count: 1,
      });
      // alert
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: "#FFBD5C",
        color: "#2E353C",
        iconColor: "white",
      });
      Toast.fire({
        icon: "success",
        title: "با موفقیت اضافه شد",
      });
      // alert end
    },
  },
};
</script>
