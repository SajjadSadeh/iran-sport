<template>
  <div class="container p-1 mx-auto my-16">
    <h1 class="text-xl font-bold text-center text-firstGray">
      محبوب ترین برندها
    </h1>
    <div
      class="flex justify-around gap-6 mt-4 item4-center max-w-[750px] mx-auto"
    >
      <div class="w-1/5 max-w-[100px]" v-for="src in brandLogos" :key="src">
        <img class="w-full" :src="src" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brands",
  data() {
    return {
      brandLogos: [
        "https://sajjad.storage.iran.liara.space/iran-sport/brand-images/brand-image%20%281%29.png",
        "https://sajjad.storage.iran.liara.space/iran-sport/brand-images/brand-image%20%282%29.png",
        "https://sajjad.storage.iran.liara.space/iran-sport/brand-images/brand-image%20%283%29.png",
        "https://sajjad.storage.iran.liara.space/iran-sport/brand-images/brand-image%20%284%29.png",
        "https://sajjad.storage.iran.liara.space/iran-sport/brand-images/brand-image%20%285%29.png",
      ],
    };
  },
};
</script>
