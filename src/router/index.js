import { createRouter, createWebHistory } from 'vue-router'
import Games from "../views/Games";
import Game from "@/views/Game";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/game/:id',
    props: true,
    name: 'Game',
    component: Game
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
