import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faEnvelope as fasEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee as farFaCoffee } from "@fortawesome/free-regular-svg-icons";
// import { faTwitter as fabTwitter } from "@fortawesome/free-brands-svg-icons";

import { registerGlobalComponents } from "./utils/import";

import "./assets/styles/tailwind.css";
import "./assets/styles/main.css";

/* add icons to the library */
library.add(fasEnvelope);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(router);

registerGlobalComponents(app);

app.mount("#app");
