import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Unicon from "vue-unicons"
import { uniApps, uniBookmark, uniFavorite, uniSearch, uniClockEight, uniUser, uniSignout, uniLayerGroup } from 'vue-unicons/dist/icons' 

Unicon.add([uniApps, uniBookmark, uniClockEight, uniFavorite, uniSearch, uniUser, uniSignout, uniLayerGroup])

createApp(App).use(Unicon).mount('#app')
