import { createRouter, createWebHistory } from 'vue-router';
import Shop from '../pages/Shop.vue';
import Cart from '../pages/Cart.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue';

const routes = [
  { path: '/', component: Shop },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact },
  { path: '/about', component: About }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
