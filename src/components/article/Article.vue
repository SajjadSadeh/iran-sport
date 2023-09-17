<template>
  <div class="container p-1 mx-auto my-16">
    <div class="flex flex-col items-center mb-4">
      <h1 class="text-2xl font-bold text-center text-firstGray">
        اخبار و مقالات
      </h1>
      <p class="inline p-1 text-sm text-firstOrange">
        بهترین مطالب روز
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="107"
          height="2"
          viewBox="0 0 107 2"
          fill="none"
        >
          <path
            d="M1 1H67"
            stroke="#FFBD5C"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M72 1H94"
            stroke="#FFBD5C"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M99 1H106"
            stroke="#FFBD5C"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-6">
      <template v-for="article in articleInfos" :key="article.id">
        <ArticleItem :data="article" />
      </template>
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem.vue";
export default {
  name: "Article",
  components: { ArticleItem },
  data() {
    return {
      articleInfos: [
        {
          id: 1,
          imageSrc: "src/assets/article-images/article-image(1)",
          title: "بررسی کفش Nike مدل رانر",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.,",
          date: 1693952359044,
        },
        {
          id: 2,
          imageSrc: "src/assets/article images/article-image (2)",
          title: "ویژگی های یک تیشرت ورزشی مناسب",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.,",
          date: 1693552359044,
        },
        {
          id: 3,
          imageSrc: "src/assets/article images/article-image (3)",
          title: "بررسی کفش Nike مدل رانر",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.,",
          date: 1693972359044,
        },
        {
          id: 4,
          imageSrc: "src/assets/article images/article-image (4)",
          title: "بهترین کتانی های ورزشی سال",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.,",
          date: 1693902359044,
        },
      ],
    };
  },
};
</script>
