import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
      component: () => import('../modules/home/view/HomePage.vue') 
    } , { path: '/list', 
    component: () => import('../modules/pokelist/view/PokeListPage.vue') 
  } 
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
