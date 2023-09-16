<template>
  <div
    id="one"
    class="text-white p-4 flex"
    :class="{ 'justify-end': sliderNumber === 3 }"
  >
    <img class="inset-0 absolute -z-10 h-full w-full" :src="imageSrc" />
    <div class="w-1/2 md:w-1/3 sm:mt-[5%] flex flex-col items-start gap-4">
      <h1 class="sm:text-2xl text-md font-bold">فروشگاه ایران اسپرت</h1>
      <p class="font-light hidden sm:block">
        لورم ایپسوم متن ساختگی با تولید سادگـــــــی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است .
      </p>
      <button
        class="border-firstOrange border-[1px] py-2 px-4 text-firstOrange border-solid rounded flex gap-1"
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
        <p>بریم خرید</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["imageSrc", "sliderNumber"],
};
</script>
<style scoped>
#one {
  height: clamp(150px, 40vw, 500px);
  background-size: cover; /* تصویر به گونه‌ای که کامل و بدون تکرار در داخل دیو جا بیفتد و پس زمینه را پوشش دهد */
  background-repeat: no-repeat; /* تکرار تصویر غیرفعال شود */
  background-position: center center; /* تصویر در وسط دیو قرار بگیرد */
}
</style>
