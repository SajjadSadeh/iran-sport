<template>
  <div
    style="width: clamp(410px, 20vw, 500px)"
    class="flex flex-col gap-3 m-1 bg-white rounded shadow text-firstGray"
  >
    <div class="w-full">
      <img
        :src="`src/assets/article-images/article-image (${data.id}).png`"
        alt=""
        class="w-full"
      />
    </div>
    <div class="flex flex-col gap-3 px-4 py-2">
      <h1 class="text-xl font-bold">{{ data.title }}</h1>
      <p class="text-sm">{{ data.text }}</p>
      <div class="flex items-center justify-between">
        <p class="flex items-center gap-1 text-xs text-SecondGray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-calendar-due"
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
              d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
            ></path>
            <path d="M16 3v4"></path>
            <path d="M8 3v4"></path>
            <path d="M4 11h16"></path>
            <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
          {{ new Date(data.date).toLocaleDateString("fa-IR") }}
        </p>
        <p class="text-firstOrange">...بیشتر</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: ["data"],
};
</script>
