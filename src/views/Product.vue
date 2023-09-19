<template>
  <div class="container p-1 mx-auto my-16">
    <p class="my-2 text-xs text-SecondGray">
      {{ productInfo.category }} / {{ productInfo.Shoe_Name }}
    </p>
    <div class="flex flex-col gap-4 sm:flex-row">
      <div class="w-3/4 mx-auto sm:w-1/4">
        <div class="w-full bg-[#131313] rounded-md">
          <img
            ref="mainPicture"
            class="w-full"
            :src="productInfo.Shoe_Main_Image"
            alt=""
          />
        </div>
        <div class="flex items-center w-full py-1">
          <div class="bg-[#131313] rounded-md h-full cursor-pointer w-full">
            <img
              @click="$refs.mainPicture.src = productInfo.Shoe_Main_Image"
              class="w-full"
              :src="productInfo.Shoe_Main_Image"
              alt=""
            />
          </div>
          <div
            v-for="item in productInfo.Shoe_Detail_Pictures"
            class="w-full rounded cursor-pointer"
            :key="item"
            @click="$refs.mainPicture.src = item"
          >
            <img :src="item" alt="" class="w-full" />
          </div>
        </div>
      </div>

      <div
        class="w-full p-4 text-base font-bold bg-white rounded-md sm:w-3/4 text-firstGray"
      >
        <h1
          class="p-1 py-3 mb-3 font-bold border-b-2 border-solid border-blueGray"
        >
          {{ productInfo.Shoe_Name }}
        </h1>
        <div class="flex flex-col gap-2 md:flex-row">
          <div class="w-full md:w-3/5">
            <div class="flex flex-col gap-4 my-6">
              <p class="text-lg font-bold">رنگ ها :</p>
              <div class="flex gap-1">
                <div
                  v-for="item in productInfo.Shoe_Colors"
                  :key="item"
                  @click="chosedColor = item"
                  class="flex items-center justify-center rounded-full shadow-md cursor-pointer w-7 h-7 text-firstOrange"
                  :style="{ backgroundColor: item }"
                >
                  <div :class="{ hidden: chosedColor !== item }">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
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
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4 my-6">
              <p class="text-lg font-bold">سایز ها :</p>
              <div class="flex gap-1">
                <p
                  v-for="item in productInfo.Shoe_Sizes"
                  :key="item"
                  @click="chosedSize = item"
                  class="flex items-center justify-center w-8 h-8 p-2 rounded-full shadow-md cursor-pointer"
                  :class="{ 'bg-green-500': chosedSize === item }"
                >
                  {{ item }}
                </p>
              </div>
            </div>

            <div class="flex flex-col gap-4 my-6">
              <p class="text-lg font-bold">ویژگی ها :</p>
              <div class="flex flex-col gap-1">
                <div class="flex gap-1 text-sm font-light">
                  <p class="text-SecondGray">جنس :</p>
                  <p class="font-medium text-firstGray">
                    {{ productInfo.Shoe_Features.Sole_Material }}
                  </p>
                </div>
                <div class="flex gap-1 text-sm font-light">
                  <p class="text-SecondGray">ارتفاع ساق پا :</p>
                  <p class="font-medium text-firstGray">
                    {{ productInfo.Shoe_Features.Height }}
                  </p>
                </div>
                <div class="flex gap-1 text-sm font-light">
                  <p class="text-SecondGray">نحوه بسته شدن کفش :</p>
                  <p class="font-medium text-firstGray">
                    {{ productInfo.Shoe_Features.Closure_Method }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-full gap-1 px-6 py-4 mt-5 text-sm font-medium rounded shadow-lg md:w-2/5"
          >
            <h1 class="text-xl font-bold text-firstGray">فروشنده</h1>

            <div
              class="border-b-[1px] border-solid border-blueGray py-3 flex justify-between items-center"
            >
              <p class="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-building-store"
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
                  <path d="M3 21l18 0"></path>
                  <path
                    d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
                  ></path>
                  <path d="M5 21l0 -10.15"></path>
                  <path d="M19 21l0 -10.15"></path>
                  <path
                    d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
                  ></path></svg
                >ایران اسپرت
              </p>
              <p>
                {{ productInfo.Shoe_Features.Customer_Satisfaction_Rating }}
                رضایت کالا
              </p>
            </div>

            <div
              class="border-b-[1px] border-solid flex border-blueGray py-3 gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-shield-check-filled"
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
                  d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              گارانتی اصالت و سلامت فیزیکی کالا
            </div>

            <div
              class="border-b-[1px] border-solid flex border-blueGray py-3 gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-building-store"
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
                <path d="M3 21l18 0"></path>
                <path
                  d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
                ></path>
                <path d="M5 21l0 -10.15"></path>
                <path d="M19 21l0 -10.15"></path>
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
              </svg>
              موجود در انبار
            </div>

            <div
              class="border-b-[1px] border-solid flex border-blueGray py-3 gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-coin"
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
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path
                  d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"
                ></path>
                <path d="M12 7v10"></path>
              </svg>
              150 امتیاز ایران اسپرت
            </div>

            <div class="flex items-center justify-between mt-2">
              <p class="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-info-circle"
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
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
                قیمت
              </p>
              <p class="flex">{{ productInfo.Price }} تومان</p>
            </div>
            <button
              class="flex items-center justify-center gap-1 px-4 py-2 mt-6 rounded bg-firstOrange"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-shopping-cart-plus"
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
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M12.5 17h-6.5v-14h-2"></path>
                <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
              </svg>
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore.js";
export default {
  name: "Product",
  data() {
    return {
      productsStore: useProductsStore(),
      productInfo: null,
      productID: this.$route.params.id,
      chosedColor: null,
      chosedSize: null,
    };
  },

  async created() {
    await this.productsStore.fetchProducts();
    this.productInfo = this.productsStore.getProductByID(this.productID);
    window.scrollTo(0, 0);
  },
};
</script>
