import { createApp } from 'vue';

import App from './App.vue';
import '@/assets/css/global.css';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import vuetify from './plugins/vuetify';
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
