import {createApp} from 'vue'
import './style.css'
import "@/styles/tailwind.css"
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store).mount('#app')