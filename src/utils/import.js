import { defineAsyncComponent } from "vue";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { PUBLIC_LAYOUT } from "@/constants";

export const registerGlobalComponents = (app) => {
  app.component(
    PUBLIC_LAYOUT.default,
    defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue"))
  );
  app.component("font-awesome-icon", FontAwesomeIcon);
};
