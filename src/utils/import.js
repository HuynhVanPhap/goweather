import { defineAsyncComponent } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";

export const registerGlobalComponents = (app) => {
  app.component(
    PUBLIC_LAYOUT.default,
    defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue"))
  );
};
