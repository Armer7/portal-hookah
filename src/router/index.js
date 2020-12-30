import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Home')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Cart')
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Menu'),
    children: [
      {
        path: '',
        component: () => import('@/views/MainMenu')
      },
      {
        path: 'dishes',
        name: 'Dishes',
        meta: {
          layout: "Menu"
        },
        component: () => import('@/views/Dishes')
      },
      {
        path: 'drinks',
        name: 'Drinks',
        component: () => import('@/views/Drinks'),
        children: [
          {
            path: '',
            //component: () => import('@/views/MainDrinks')
          },
          {
            path: 'coldDrinks',
            name: 'ColdDrinks',
            meta: {
              layout: "Menu",
              subLayout: "drinks"
            },
            component: () => import('@/views/ColdDrinks')
          },
          {
            path: 'hotDrinks',
            name: 'HotDrinks',
            meta: {
              layout: "Menu",
              subLayout: "drinks"
            },
            component: () => import('@/views/HotDrinks')
          }
        ],
      },
      {
        path: 'desserts',
        name: 'Desserts',
        meta: {
          layout: "Menu"
        },
        component: () => import('@/views/Desserts')
      },


    ]
  },
  {
    path: '/games',
    name: 'Games',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Games')
  },
  {
    path: '/response',
    name: 'Response',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/Response')
  },


  {
    path: '*',
    name: 'notFound',
    meta: {
      layout: "main"
    },
    component: () => import('@/views/404')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
