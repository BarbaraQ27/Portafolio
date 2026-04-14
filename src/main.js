import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'


const app = createApp(App)
app.use(VueHighlightJS)
app.mount('#app')
