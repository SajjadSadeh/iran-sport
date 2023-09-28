<template>
  <div>
    <div v-if="loading" class="my-16">
      <Loader />
      طزری
    </div>
    <template v-else>
      <ArticleContainer
        :articles="articlesStore.articles"
        class="animate__animated animate__backInDown"
      />
    </template>
  </div>
</template>

<script>
import ArticleContainer from "../components/article/ArticleContainer.vue";
import { useArticlesStore } from "../stores/ArticlesStore";
import Loader from "../components/Loader.vue";
export default {
  name: "Articles",
  components: { ArticleContainer, Loader },
  data() {
    return {
      articlesStore: useArticlesStore(),
      loading: true,
    };
  },
  created() {
    this.loading = true;
    this.articlesStore.fetchArticles();
    this.loading = false;
    window.scrollTo(0, 0);
  },
};
</script>
