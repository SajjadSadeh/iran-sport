<template>
  <div
    class="container flex flex-col items-center justify-between gap-6 p-1 px-6 py-4 mx-auto my-16 bg-white shadow sm:flex-row"
  >
    <div id="title" class="relative text-firstGray">
      <h1 class="text-xl font-bold">اعطای نمایندگی</h1>
      <p class="text-xs">
        شما می توانید با کارشناسان پایا در ارتباط بوده و نمایندگی خود را دریافت
        کنید
      </p>
    </div>
    <button class="px-4 py-2 rounded bg-firstOrange">اعطای نمایندگی</button>
  </div>
</template>

<script>
export default {
  name: "Representation",
};
</script>
<style scoped>
#title::before {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  right: -10px;
  border-radius: 10px;
  width: 3px;
  /* height: 10px; */
  background-color: #ffbd5c;
}
</style>
