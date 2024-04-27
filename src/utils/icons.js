/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import { faSun, faCircleInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faSun, faInfo } from "@fortawesome/free-regular-svg-icons";
// import { faTwitter as fabTwitter } from "@fortawesome/free-brands-svg-icons";

export const registerIcons = () => {
  /* add icons to the library */
  library.add(faSun, faCircleInfo, faPlus);
};
