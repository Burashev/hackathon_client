import { createRouter, createWebHistory } from 'vue-router'
import Games from "../views/Games";
import Game from "@/views/Game";

const routes = [
  {
    path: '/',
    name: 'Games',
    alias: '/games',
    component: Games
  },
  {
    path: '/game/:id',
    props: true,
    name: 'Game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
