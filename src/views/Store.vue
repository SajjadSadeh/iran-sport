<template>
  <div
    class="container flex flex-col items-start justify-between mx-auto my-16 lg:flex-row"
  >
    <!-- filter section -->
    <div
      class="flex lg:sticky mb-2 rounded ml-2 lg:top-16 lg:flex-col flex-col min-[350px]:flex-row w-full items-start justify-center lg:w-[250px] gap-4 p-1 bg-white shadow text-firstGray"
    >
      <p class="font-bold">فیلترها</p>

      <div
        class="flex flex-col gap-2 border-b-[1px] border-blueGray w-full px-2 py-3"
      >
        <button
          class="flex justify-between"
          @click="showChoseCategory = !showChoseCategory"
        >
          <p>دسته بندی</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-down"
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
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
        </button>
        <div class="flex flex-col" v-show="showChoseCategory">
          <label
            v-for="item in shoesCategoty"
            :key="item"
            @click="choseCategory(item)"
          >
            <input type="radio" name="shoeCategoty" @click.stop="null" />
            {{ item }}
          </label>
        </div>
      </div>

      <div
        class="flex flex-col gap-2 border-b-[1px] border-blueGray w-full px-2 py-3"
      >
        <button
          class="flex justify-between"
          @click="showPriceRange = !showPriceRange"
        >
          <p>محدوده قیمت</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-down"
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
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
        </button>
        <div class="flex flex-col gap-1" v-show="showPriceRange">
          <div
            class="flex justify-between gap-1 min-[350px]:flex-col sm:flex-row"
          >
            <p class="w-36">شروع قیمت :</p>
            <input
              placeholder="0"
              type="number"
              min="0"
              max="10000000"
              class="w-full px-2 rounded bg-thirdGray"
              v-model="minPrice"
              dir="ltr"
              @input="sortByPrice"
            />
          </div>
          <div
            class="flex justify-between gap-1 min-[350px]:flex-col sm:flex-row"
          >
            <p class="w-36">انتهای قیمت :</p>
            <input
              placeholder="0"
              type="number"
              min="0"
              max="10000000"
              class="w-full px-2 rounded bg-thirdGray"
              v-model="maxPrice"
              dir="ltr"
              @input="sortByPrice"
            />
          </div>
          <p>
            {{ minPrice ? minPrice.toLocaleString() : null }} تا
            {{ maxPrice ? maxPrice.toLocaleString() : null }} تومان
          </p>
          <p class="text-xs text-center">این بخش فعلا کار نمیکند</p>
        </div>
      </div>
    </div>
    <!-- filter section ends -->

    <!-- products section -->
    <div class="w-full max-w-[1000px]">
      <div
        class="flex flex-wrap items-center justify-center gap-2 p-1 text-sm font-semibold bg-white rounded sm:justify-between"
      >
        <p class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-filter"
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
            <path
              d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
            ></path>
          </svg>
          مرتب سازی :
        </p>
        <p
          v-for="item in sorts"
          :key="item[1]"
          @click="
            activeOrder = item[1];
            choseBySort(item[1]);
          "
          class="px-3 py-1 cursor-pointer rounded-xl text-SecondGray"
          :class="{ 'text-firstGray bg-firstOrange': activeOrder == item[1] }"
        >
          {{ item[0] }}
        </p>
      </div>

      <!-- products -->
      <!-- loader -->
      <div v-if="loading">
        <Loader />
      </div>
      <div
        v-else
        class="flex flex-wrap items-center justify-center gap-1 mt-8 s:justify-between sm:gap-8"
      >
        <template v-for="item in filteredProducts" :key="item.ID">
          <ShoeCard :data="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";
import ShoeCard from "../components/ShoeCard.vue";
import Loader from "../components/Loader.vue";
export default {
  name: "Store",
  data() {
    return {
      productStore: useProductsStore(),
      loading: true,
      minPrice: null,
      maxPrice: null,
      showPriceRange: false,
      showChoseCategory: false,
      activeOrder: "mostVisited",
      filteredProducts: [],
      filterByPrice: [],
      sorts: [
        ["پربازدیدترین", "mostVisited"],
        ["جدیدترین", "newest"],
        ["پرفروش ترین", "bestSelling"],
        ["ارزان ترین", "cheapest"],
        ["گران ترین", "mostExpensive"],
      ],
      shoesCategoty: [
        "همه",
        "کوهنوردی",
        "بسکتبال",
        "والیبال",
        "فوتبال",
        "دومیدانی",
      ],
      x: null,
    };
  },
  methods: {
    choseCategory(selected) {
      this.filteredProducts = this.productStore.getByCategory(selected);
      this.filteredProducts[0]
        ? null
        : (this.filteredProducts = this.productStore.products);
    },
    choseBySort(selected) {
      this.filterBySorting = this.productStore.getSortBy(
        selected,
        this.filteredProducts
      );
    },
    // sortByPrice() {
    //   // clearInterval(this.x);

    //   this.filterByPrice = this.productStore.getBetweenPrices(
    //     this.minPrice,
    //     this.maxPrice,
    //     this.filteredProducts
    //   );
    //   this.filterByPrice[0]
    //     ? (this.filteredProducts = this.filterByPrice)
    //     : null;
    // },
  },
  components: { ShoeCard, Loader },
  async created() {
    this.loading = true;
    await this.productStore.fetchProducts();
    this.choseCategory("همه");
    this.choseBySort("mostRelevant");
    this.loading = false;
    window.scrollTo(1, 1);
  },
};
</script>
<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
