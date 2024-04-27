import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { registerGlobalComponents } from "./utils/import";
import { registerIcons } from "./utils/icons";

import "./assets/styles/tailwind.css";
import "./assets/styles/main.css";

const app = createApp(App);

app.use(store);
app.use(router);

registerGlobalComponents(app);
registerIcons();

app.mount("#app");
