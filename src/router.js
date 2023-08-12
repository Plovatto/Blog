
import { createRouter, createWebHistory } from 'vue-router';

//views
import publi0 from './components/publi0.vue';
import publi1 from './components/publi1.vue';
import publi2 from './components/publi2.vue';
import publi3 from './components/publi3.vue';
import publi4 from './components/publi4.vue';
import publi5 from './components/publi5.vue';
import Equipe from './components/Equipe.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Recentes from './components/Recentes.vue';
import Inicio from './views/Inicio.vue';



const routes = [
  
  {path: '/', component: () => import('@/layouts/default/Default.vue')},
  {path: '',name: 'Inicio',component: () => import('@/views/Inicio.vue')}, 
  { path: '/Inicio', component: Inicio },
  { path: '/Equipe', component: Equipe },
  { path: '/Footer', component: Footer },
  { path: '/Header', component: Header },
  { path: '/Recentes', component: Recentes },
  { path: '/publi0', component:publi0},
  { path: '/publi1', component:publi1},
  { path: '/publi2', component:publi2},
  { path: '/publi3', component:publi3},
  { path: '/publi4', component:publi4},
  { path: '/publi5', component:publi5},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

