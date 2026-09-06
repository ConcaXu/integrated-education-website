import { createApp } from 'vue'
import '@/assets/styles/reset.css'
import '@/assets/styles/style.css'
import '@/assets/styles/footer.css'
import '@/assets/styles/index.scss'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
