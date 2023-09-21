<template>
  <div class="fixed top-0 left-0 right-0 z-20">
    <Header />
  </div>
  <div>
    <router-view></router-view>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useBasketStore } from "./stores/BasketStore";

export default {
  components: { Header, Footer },
  data() {
    return {
      basketStore: useBasketStore(),
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
};
</script>
