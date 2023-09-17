<template>
  <div class="container p-1 mx-auto my-16">
    <div class="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <h1 class="">کفش های ایران اسپرت</h1>
      <div
        ref="filterContainer"
        class="flex items-center justify-center gap-2 text-[14px] text-SecondGray cursor-pointer"
      >
        <p
          @click="filterShoesName = item"
          v-for="item in shoesCategoty"
          :key="item"
          :class="[item === filterShoesName ? active : '']"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center gap-1 mt-8 s:justify-between sm:gap-8"
    >
      <template v-for="item in showedProducts" :key="item">
        <ShoeCard :data="item"
      /></template>
    </div>
    <div
      @click="numberOfShowProducts += 8"
      class="flex flex-col items-center justify-center mt-4 cursor-pointer gap1 text-firstGray"
    >
      <p>بیشتر</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-down"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M18 13l-6 6"></path>
        <path d="M6 13l6 6"></path>
      </svg>
    </div>
    <div>
      {{ productStore.climbingCategory }}
    </div>
  </div>
</template>

<script>
import ShoeCard from "./ShoeCard.vue";
import { useProductsStore } from "../stores/ProductsStore.js";

export default {
  name: "ShoesInHomePage",
  data() {
    return {
      filterShoesName: "همه",
      shoesCategoty: [
        "همه",
        "کوهنوردی",
        "بسکتبال",
        "والیبال",
        "فوتبال",
        "دومیدانی",
      ],
      active: "px-1 rounded-md bg-firstOrange text-firstGray",
      productStore: null,
      allProducts: [],
      showedProducts: [],
      numberOfShowProducts: 9,
    };
  },
  components: {
    ShoeCard,
  },
  async created() {
    this.productStore = useProductsStore();
    await this.productStore.fetchProducts();
    this.allProducts = this.productStore.products;
    this.updataShowedProducts();
  },
  methods: {
    filterShoes(e) {
      [...this.$refs.filterContainer.children].forEach(
        (item) => (item.className = "")
      );
      e.target.className = "px-1 rounded-md bg-firstOrange text-firstGray";
    },

    updataShowedProducts() {
      this.showedProducts = [];
      for (let i = 0; i < this.numberOfShowProducts; i++) {
        this.allProducts[i]
          ? this.showedProducts.push(this.allProducts[i])
          : null;
      }
    },
  },
  watch: {
    numberOfShowProducts: {
      handler() {
        this.updataShowedProducts();
      },
      immediate: true,
    },
    filterShoesName: {
      handler() {
        if (this.filterShoesName === "همه") {
          this.allProducts = this.productStore.products;
        } else {
          this.allProducts = this.productStore.getByCategory(
            this.filterShoesName
          );
        }
        this.numberOfShowProducts = 6;
        this.updataShowedProducts();
      },
    },
  },
};
</script>
