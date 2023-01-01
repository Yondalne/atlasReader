import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import Unicon from "vue-unicons"
import { uniApps, uniBookmark, uniFavorite, uniSearch, uniClockEight, uniUser, uniSignout, uniLayerGroup, uniEye } from 'vue-unicons/dist/icons' 

Unicon.add([uniApps, uniBookmark, uniClockEight, uniFavorite, uniSearch, uniUser, uniSignout, uniLayerGroup, uniEye])


const app = createApp(App) 

app.use(Unicon)
    .use(router)
    .mount('#app')
