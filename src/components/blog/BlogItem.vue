<template>
  <div
    class="flex items-end w-full min-[500px]:w-auto rounded justify-between max-w-[640px] mx-auto shadow bg-thirdGray flex-col min-[500px]:flex-row"
  >
    <div class="flex flex-col items-start gap-2 p-8">
      <h1 class="text-2xl font-bold text-firstGray">{{ data.title }}</h1>
      <p class="text-sm font-normal text-SecondGray">
        {{ data.text }}
      </p>
      <button
        class="hidden min-[500px]:flex items-center gap-1 px-3 py-1 text-xs rounded bg-firstOrange"
      >
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
        <p>بیشتر</p>
      </button>
    </div>
    <div class="w-3/4 h-full">
      <img class="w-full" :src="data.imageSrc" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["data"],
};
</script>
