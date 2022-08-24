import { createApp } from 'vue';

import App from './App.vue';
import '@/assets/css/global.css';
import vuetify from './plugins/vuetify';
import DefaultLayout from './layouts/DefaultLayout.vue';
import NoneLayout from './layouts/NoneLayout.vue';
import { router } from './router';
const app = createApp(App);
// define global component
app.component('default-layout', DefaultLayout);
app.component('none-layout', NoneLayout);
// use 3th library
app.use(vuetify);
app.use(router);
//mount to HTML
app.mount('#app');
