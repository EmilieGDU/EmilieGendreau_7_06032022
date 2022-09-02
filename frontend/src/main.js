// ###############################################################################
//                       VUE.JS 3 + ECOSYSTEM (VUE-ROUTER...)
// ###############################################################################
/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.router'


// ###############################################################################
//                                   BOOTSTRAP 5
// ###############################################################################
/* Set up Bootstrap 5 for the Vue 3 application */
import "bootstrap/dist/css/bootstrap.min.css"

/* Customize Bootstrap 5 in Vue 3 */
import "./custom.scss"


// ###############################################################################
//                                   FONT AWESOME
// ###############################################################################
import { FontAwesomeIcon } from "./plugins/font-awesome"


// ###############################################################################
//                                   APPLICATION
// ###############################################################################
createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


// ###############################################################################
//                            BOOTSTRAP 5 (Module JS)
// ###############################################################################
/* Set up Bootstrap 5 for the Vue 3 application */
import "bootstrap/dist/js/bootstrap.js"