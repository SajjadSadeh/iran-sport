<template>
  <div
    style="width: clamp(300px, 20vw, 330px)"
    class="flex flex-col items-center justify-center gap-2 px-4 py-2 mb-10 text-center bg-white rounded shadow"
  >
    <img class="w-6/7" :src="data.Shoe_Main_Image" alt="" />
    <router-link :to="'/product/' + data.ID">
      <p class="text-lg font-semibold text-firstGray">
        {{ data.Shoe_Name }}
      </p>
    </router-link>

    <div>
      <p class="text-firstOrange">2250000</p>
      <p class="text-sm line-through text-SecondGray">5450000</p>
    </div>
    <p class="text-xs text-SecondGray">
      {{ data.Shoe_Features.Sole_Material }} ,
      {{ data.Shoe_Features.Closure_Method }}
    </p>
    <button
      class="px-2 py-1 text-black transition-all rounded hover:px-8 bg-firstOrange"
    >
      + افزودن
    </button>
  </div>
</template>

<script>
export default {
  name: "ShoeCard",
  props: ["data"],
};
</script>
