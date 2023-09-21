<template>
  <div class="container p-1 mx-auto my-24 bg-white rounded shadow">
    <div
      class="flex items-center justify-center w-full text-center -rotate-6 text-8xl text-firstOrange"
    >
      404 page
    </div>
    <div
      class="flex flex-col items-center justify-center gap-3 mt-12 mb-4 text-center text-firstGray"
    >
      <p>مثل اینکه گم شدی</p>
      <p>
        برای رفتن به صفحه اصلی میتونی از منوی بالا استفاده کنی یا روی
        <router-link
          :to="{ name: 'Home' }"
          class="text-lg font-bold text-firstOrange"
          >این</router-link
        >
        کلیک کنی
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.scrollTo(1, 1);
  },
};
</script>
