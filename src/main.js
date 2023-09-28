import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "../router.js";
import "./style.css";
import App from "./App.vue";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "animate.css";

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");
