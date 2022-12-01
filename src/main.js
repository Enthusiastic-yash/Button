import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faMusic,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { faCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faHouse, faMusic, faChevronUp, faChevronDown, faCircle);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
