import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import '@/assets/css/global.css';
import vuetify from './plugins/vuetify';
import DefaultLayout from './layouts/DefaultLayout.vue';
import NoneLayout from './layouts/NoneLayout.vue';
import { router } from './router';
import { getAuth } from 'firebase/auth';
let app;

const store = createStore({
    state() {
        return {
            user: {},
        };
    },
    mutations: {
        login(state, payload) {
            state.user = payload;
        },
    },
});

const createAppVue = () => {
    app = createApp(App);
    // define global component
    app.component('default-layout', DefaultLayout);
    app.component('none-layout', NoneLayout);
    // use 3th library
    app.use(vuetify);
    app.use(router);
    app.use(store);
    //mount to HTML
    app.mount('#app');
};

getAuth().onAuthStateChanged((user) => {
    if (!app) {
        createAppVue();
    }
});
