import { createApp } from 'vue'
import App from './App.vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'
import "./assets/common.css"
import axios from 'axios'

const app = createApp(App).use(Varlet)
app.config.globalProperties.$axios = axios;
app.mount('#app')