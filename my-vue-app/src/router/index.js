import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';


const routes = [
  { path: '/', name: 'Home', component: Home }, 

  { path: '/details/:id',name: 'details.show',  component: ()=> import('@/views/MovieDetail.vue'),props: true },

  { path: '/details/:slug/:experienceSlug', name: 'experience.show', component:  ()=> import('@/views/ExperienceShow.vue'),props: true}
,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
