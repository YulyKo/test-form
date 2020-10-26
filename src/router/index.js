import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SubjectsPage from '../views/SubjectsPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: SubjectsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
