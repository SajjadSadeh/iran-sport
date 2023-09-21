<template>
  <div class="container p-1 mx-auto my-16">
    <div class="flex flex-col items-center justify-center w-full gap-6">
      <div
        v-if="!basketStore.basketItems[0]"
        class="flex flex-col items-center w-full max-w-md mt-16"
      >
        <p class="text-2xl font-bold text-center text-firstGray">
          سبد خرید خالی است
        </p>
        <div class="w-2/3 text-firstOrange rotate-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-basket-x"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 10l-2 -6"></path>
            <path d="M7 10l2 -6"></path>
            <path
              d="M13.5 20h-6.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.532 3.03"
            ></path>
            <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M22 22l-5 -5"></path>
            <path d="M17 22l5 -5"></path>
          </svg>
        </div>
      </div>
      <template v-else>
        <p
          class="px-8 py-2 mt-6 text-xl font-bold border-b-2 border-solid border-firstOrange"
        >
          سبد خرید
        </p>
        <div
          class="px-4 py-2 bg-white rounded shadow w-full max-w-[800px] flex flex-col gap-4"
          v-for="item in basketStore.basketItems"
          :key="item.ID"
        >
          <div class="flex items-center w-full">
            <div class="bg-[#131313] max-w-[130px] rounded-md">
              <img class="w-full" :src="item.Shoe_Main_Image" alt="" />
            </div>
            <div class="flex flex-col justify-center w-1/2 px-5">
              <p class="font-bold text-firstGray">{{ item.Shoe_Name }}</p>
              <ul class="p-3 text-sm text-SecondGray">
                <li class="relative">سایز : {{ item.chosedSize }}</li>
                <li class="relative flex items-center gap-1">
                  رنگ :
                  <div
                    class="w-5 h-3 rounded-md"
                    :style="{ backgroundColor: item.chosedColor }"
                  ></div>
                </li>
                <li class="relative">موجود در انبار</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-end gap-4">
            <!-- price -->
            <div>
              <div v-if="item.percentOfDiscount === 0">
                {{ item.Price.toLocaleString() }} تومان
              </div>
              <div v-else>
                <p class="text-base">
                  {{
                    (
                      item.Price -
                      (item.Price * item.percentOfDiscount) / 100
                    ).toLocaleString()
                  }}
                  تومان
                </p>
                <p class="text-xs text-left line-through text-SecondGray">
                  {{ item.Price.toLocaleString() }} تومان
                </p>
              </div>
            </div>
            <!-- price end -->
            <div class="flex items-center p-1 rounded-md bg-thirdGray">
              <button
                class="p-1 text-2xl bg-white rounded-md"
                @click="basketStore.increaseCountProduct(item)"
              >
                +
              </button>
              <p class="px-4 text-lg font-bold text-firstGray">
                {{ item.count }}
              </p>
              <button
                class="p-1 text-2xl bg-white rounded-md"
                @click="basketStore.reduceCountProduct(item)"
              >
                -
              </button>
            </div>
            <div class="text-red-600 cursor-pointer" @click="removeItem(item)">
              <!-- trash icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trash-x-filled"
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
                  d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
                <path
                  d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- total purchase -->
    <div
      class="bg-white rounded shadow max-w-[800px] mx-auto"
      v-if="basketStore.basketItems[0]"
    >
      <p class="p-4 mt-12 text-lg font-bold rounded-md text-firstGray">
        خلاصه سبد
      </p>
      <div class="flex flex-col gap-5 py-6">
        <div
          class="w-full flex px-3 py-1 items-center justify-between max-w-lg mx-auto border-b-[1px] border-thirdGray border-solid"
        >
          <p class="font-light text-SecondGray">جمع قیمت ها</p>
          <p class="text-base font-medium text-firstGray">
            {{ basketStore.getTotalPrice.toLocaleString() }} تومان
          </p>
        </div>

        <div
          class="w-full flex px-3 py-1 items-center justify-between max-w-lg mx-auto border-b-[1px] border-thirdGray border-solid"
        >
          <p class="font-light text-SecondGray">مجموع تخفیف</p>
          <p class="text-base font-medium text-firstGray">
            {{ basketStore.getTotalDiscount.toLocaleString() }} تومان
          </p>
        </div>

        <div
          class="w-full flex px-3 py-1 items-center justify-between max-w-lg mx-auto border-b-[1px] border-thirdGray border-solid"
        >
          <p class="font-normal text-firstGray">مبلغ قابل پرداخت</p>
          <p class="text-base font-medium text-firstGray">
            {{
              (
                basketStore.getTotalPrice - basketStore.getTotalDiscount
              ).toLocaleString()
            }}
            تومان
          </p>
        </div>
        <button
          class="block w-full max-w-lg py-1 mx-auto text-base rounded-md bg-firstOrange text-firstGray"
        >
          ادامه فرایند خرید
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useBasketStore } from "../stores/BasketStore";
import Swal from "sweetalert2";
export default {
  name: "Basket",
  data() {
    return {
      basketStore: useBasketStore(),
      basketItems: null,
    };
  },
  methods: {
    removeItem(item) {
      this.basketStore.removeProductOfBasket(item);
      this.basketItems = this.basketStore.basketItems;
      // alert
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: "#eee",
        color: "#2E353C",
        iconColor: "red",
      });
      Toast.fire({
        icon: "warning",
        title: "از سبد حذف شد",
      });
      // alert end
    },
  },
  watch: {},
  created() {
    this.basketStore.getLocalStorageValue();
    // this.basketItems = this.basketStore.basketItems;
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
li::before {
  content: "";
  background-color: #ff9800;
  width: 7px;
  height: 7px;
  right: -12px;
  top: 7px;
  border-radius: 100%;
  position: absolute;
}
</style>
