import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

library.add(
    faMagnifyingGlass,
    faFacebook,
    faGoogle,
    faHouse,
    faPhone
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VueSplide).mount('#app')
