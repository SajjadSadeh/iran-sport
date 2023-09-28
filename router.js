import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./src/views/Home.vue";
import Product from "./src/views/Product.vue";
import Articles from "./src/views/Articles.vue";
import Basket from "./src/views/Basket.vue";
import Store from "./src/views/Store.vue";
import NotFound from "./src/views/NotFound.vue";
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/store/product/:id", component: Product, name: "Product" },
  { path: "/articles", component: Articles, name: "Articles" },
  { path: "/basket", component: Basket, name: "Basket" },
  { path: "/store", component: Store, name: "Store" },
  { path: "/404", component: NotFound, name: "Notfound" },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
