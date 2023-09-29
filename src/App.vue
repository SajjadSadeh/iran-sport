<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-else>
    <div class="fixed top-0 left-0 right-0 z-20">
      <Header />
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useBasketStore } from "./stores/BasketStore";
import Loader from "./components/Loader.vue";

export default {
  components: { Header, Footer, Loader },
  data() {
    return {
      basketStore: useBasketStore(),
      loading: true,
    };
  },
  created() {
    window.addEventListener("storage", () => {
      JSON.parse(localStorage.getItem("basketItems"))
        ? (this.basketStore.basketItems = JSON.parse(
            localStorage.getItem("basketItems")
          ))
        : null;
    });
  },
  mounted() {
    // this is for show whole content when the page is loaded
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.loading = false;
      }
    };
  },
};
</script>
