import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import NoteEditor from '../components/NoteEditor.vue';
import Home from '../components/Home.vue';
import NoteList from '../components/NoteList.vue';
import { getAuth } from 'firebase/auth';

const requireAuth = (to, from, next) => {
    const user = getAuth().currentUser;
    if (user) next();
    else next('/login');
};

const routes = [
    {
        path: '/login',
        component: Login,
        meta: {
            layout: 'none',
        },
    },
    {
        path: '/',
        component: Home,
        beforeEnter: requireAuth,
        meta: {
            breadCrumb: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: '....',
                    disabled: true,
                    to: '/',
                },
            ],
        },
    },
    {
        path: '/create-note',
        component: NoteEditor,
        beforeEnter: requireAuth,
        meta: {
            breadCrumb: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Create Note',
                    disabled: true,
                    to: '/create-note',
                },
            ],
        },
    },
    {
        path: '/note-list',
        component: NoteList,
        beforeEnter: requireAuth,
        meta: {
            breadCrumb: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Note List',
                    disabled: true,
                    to: 'note-list',
                },
            ],
        },
    },
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
});
