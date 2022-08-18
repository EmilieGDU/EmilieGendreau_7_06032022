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
/* Import the base Font Awesome SVG library */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import the Font Awesome Vue component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import specific icon(s) from Font Awesome icon(s) set(s) */
import { faThumbsUp as fasFaThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farFaThumbsUp} from '@fortawesome/free-regular-svg-icons'

/* Add icons to the library */
library.add(fasFaThumbsUp, farFaThumbsUp)


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