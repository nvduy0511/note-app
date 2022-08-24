import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import NoteEditor from '../components/NoteEditor.vue';
import Home from '../components/Home.vue';
const routes = [
    { path: '/', component: Home },
    { path: '/create-note', component: NoteEditor },
    { path: '/login', component: Login, meta: { layout: 'none' } },
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
});
