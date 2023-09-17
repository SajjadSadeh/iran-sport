import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./src/views/Home.vue";
import Product from "./src/views/Product.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/product/:id", component: Product, name: "Product" },
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
