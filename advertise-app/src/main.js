import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(
    faMagnifyingGlass,
    faFacebook,
    faGoogle
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
