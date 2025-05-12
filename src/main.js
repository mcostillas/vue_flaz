import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS files
import './assets/css/main.css'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App)
  .use(router)
  .mount('#app')
