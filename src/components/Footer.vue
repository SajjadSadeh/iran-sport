<template>
  <div class="p-1 mx-auto mt-16 bg-white">
    <div class="container mx-auto">
      <div
        class="container flex flex-wrap items-center justify-center gap-8 py-4 mx-auto mb-20"
      >
        <div
          v-for="(item, index) in AdvantagesItems"
          :key="index"
          class="flex flex-col items-center gap-4 max-w-[160px] w-full"
          :data-aos="
            index < 2
              ? 'fade-left'
              : index === 2
              ? 'fade-down'
              : index > 2
              ? 'fade-right'
              : ''
          "
        >
          <div v-html="item.svg" class="w-14 h-14 text-secondOrange"></div>
          <p class="text-center text-firstGray">{{ item.text }}</p>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="max-w-[300px] min-w-[200px] p-2">
          <div>
            <img src="../assets/Logo.svg" alt="" />
            <p class="mt-2 text-sm font-light text-SecondGray">ایران اسپرت</p>
          </div>
          <p class="px-2 mt-6 text-firstGray">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطر آنچنان لازم است.
          </p>
        </div>

        <div class="max-w-[300px] min-w-[200px] p-2">
          <h1 class="font-bold">پیوند های مهم</h1>
          <div class="flex items-center justify-start gap-6 mt-4">
            <div class="flex flex-col gap-2 text-sm text-SecondGray">
              <p>فرصت های شغلی</p>
              <p>حریم خصوصی</p>
              <p>فوانین سایت</p>
              <p>تماس با ما</p>
              <p>درباره ما</p>
            </div>
            <div class="flex flex-col gap-2 text-sm text-SecondGray">
              <p>فرصت های شغلی</p>
              <p>حریم خصوصی</p>
              <p>فوانین سایت</p>
              <p>تماس با ما</p>
              <p>درباره ما</p>
            </div>
          </div>
        </div>

        <div class="max-w-[300px] min-w-[200px] p-2">
          <h1 class="mb-6 font-bold">تماس با ما</h1>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1 text-SecondGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
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
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path
                  d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                ></path>
              </svg>
              <p>تهران، سعادت آباد ، مجتمع فنی تهران</p>
            </div>

            <div class="flex items-center gap-1 text-SecondGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-phone"
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
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                ></path>
              </svg>
              <p>۰۲۱-۲۲۳۶۹۶۷۳</p>
            </div>
            <div class="flex items-center gap-1 text-SecondGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail-filled"
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
                  d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
                <path
                  d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <p>info@mftplus.com</p>
            </div>
          </div>
        </div>

        <div class="max-w-[300px] min-w-[200px] p-2">
          <h1 class="mb-6 font-bold">مارادنبال کنید</h1>
          <div class="flex items-center gap-3">
            <div class="p-1 rounded-lg bg-SecondGray text-thirdGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-whatsapp"
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
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path
                  d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                ></path>
              </svg>
            </div>
            <div class="p-1 rounded-lg bg-SecondGray text-thirdGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
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
                  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                ></path>
              </svg>
            </div>
            <div class="p-1 rounded-lg bg-SecondGray text-thirdGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-telegram"
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
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
              </svg>
            </div>
            <div class="p-1 rounded-lg bg-SecondGray text-thirdGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-linkedin"
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
                  d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                ></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </div>
            <div class="p-1 rounded-lg bg-SecondGray text-thirdGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
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
                  d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                ></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </div>
            <div class="p-1 rounded-lg bg-SecondGray text-thirdGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-x"
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
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="py-4 text-sm text-center text-SecondGray">
          تمامی حقوق وب سایت متعلق به علی شفیعی است
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      AdvantagesItems: [
        {
          text: "پشتیبانی ۲۴ ساعته",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" class=" icon icon-tabler icon-tabler-24-hours" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 13c.325 2.532 1.881 4.781 4 6"></path>
   <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"></path>
   <path d="M4 5v4h4"></path>
   <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path>
   <path d="M18 15v2a1 1 0 0 0 1 1h1"></path>
   <path d="M21 15v6"></path>
</svg>`,
        },
        {
          text: "۵ روز ضمانت بازگشت کالا",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-5-filled" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5h-4a1 1 0 0 0 -.993 .883l-.007 .117v4a1 1 0 0 0 .883 .993l.117 .007h3v2h-2l-.007 -.117a1 1 0 0 0 -1.993 .117a2 2 0 0 0 1.85 1.995l.15 .005h2a2 2 0 0 0 1.995 -1.85l.005 -.15v-2a2 2 0 0 0 -1.85 -1.995l-.15 -.005h-2v-2h3a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -.883 -.993l-.117 -.007z" stroke-width="0" fill="currentColor"></path>
</svg>`,
        },
        {
          text: "امکان پرداخت در محل",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
   <path d="M3 10l18 0"></path>
   <path d="M7 15l.01 0"></path>
   <path d="M11 15l2 0"></path>
</svg>`,
        },
        {
          text: "امکان تحویل اکسپرس",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-seam" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
   <path d="M12 12l8 -4.5"></path>
   <path d="M8.2 9.8l7.6 -4.6"></path>
   <path d="M12 12v9"></path>
   <path d="M12 12l-8 -4.5"></path>
</svg>`,
        },
        {
          text: "امکان تحویل اکسپرس",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-medal" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
   <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
</svg>`,
        },
      ],
    };
  },
};
</script>
