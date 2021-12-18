import {createRouter, createWebHistory} from 'vue-router'
import Games from "../views/Games";
import Game from "@/views/Game";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import store from "@/store";
import Profile from "@/views/Profile";
import AuthService from "@/services/AuthService";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/games',
        name: 'Games',
        component: Games,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/game/:id',
        props: true,
        name: 'Game',
        component: Game,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            guest: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuth || AuthService.lsGet()) {
            next();
        } else {
            store.dispatch('addNotification', {message: 'Нужна авторизация', error: true});
            next({
                name: 'Login'
            });
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (store.getters.isAuth || AuthService.lsGet()) {
            store.dispatch('addNotification', {message: 'На данную страницу могут попасть только гости', error: true});
            next({
                name: 'Profile'
            });
        } else next()
    } else next()
})

export default router
