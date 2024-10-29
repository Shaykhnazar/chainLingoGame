import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Game from '@/views/Game.vue'
import JoinGame from '@/views/JoinGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game/:gameId',
      name: 'Game',
      component: Game,
    },
    {
      path: '/join',
      name: 'JoinGame',
      component: JoinGame,
    },
  ],
})

export default router
