<template>
  <div>
    {{ $route.params.id }}
    {{ productsStore.getProductByID($route.params.id) }}
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore.js";
export default {
  name: "Product",
  data() {
    return {
      productsStore: useProductsStore(),
      productInfo: null,
    };
  },
  async created() {
    await this.productsStore.fetchProducts();
    this.productInfo = this.productsStore.getProductByID(this.$route.params.id);
  },
};
</script>
