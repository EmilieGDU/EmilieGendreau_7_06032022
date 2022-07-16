import "bootstrap/dist/css/bootstrap.min.css"

/* Set up using Vue 3*/
import { createApp } from 'vue'
import App from './App.vue'

/* Import the base Font Awesome SVG library */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import the Font Awesome Vue component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import specific icon(s) from Font Awesome icon(s) set(s) */
import { faThumbsUp as fasFaThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farFaThumbsUp} from '@fortawesome/free-regular-svg-icons'


/* Add icons to the library */
library.add(fasFaThumbsUp, farFaThumbsUp)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"