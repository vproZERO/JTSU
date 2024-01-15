import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style.css'
import AOS from 'aos'
module.exports
import 'aos/dist/aos.css'


const app = createApp(App, AOS.init());
app.use(router);
app.use(store);
app.mount('#app');