<template>
  <div>
    <div v-if="loading" class="my-16">
      <Loader />
    </div>
    <template v-else>
      <Article :articles="articlesStore.articles" />
    </template>
  </div>
</template>

<script>
import Article from "../components/article/Article.vue";
import { useArticlesStore } from "../stores/ArticlesStore";
import Loader from "../components/Loader.vue";
export default {
  name: "Articles",
  components: { Article, Loader },
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
