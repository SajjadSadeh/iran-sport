<template>
  <div>
    <Article :articles="articlesStore.articles" />
  </div>
</template>

<script>
import Article from "../components/article/Article.vue";
import { useArticlesStore } from "../stores/ArticlesStore";
export default {
  name: "Articles",
  components: { Article },
  data() {
    return {
      articlesStore: useArticlesStore(),
    };
  },
  created() {
    this.articlesStore.fetchArticles();
    window.scrollTo(0, 0);
  },
};
</script>
