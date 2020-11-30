
const routes = [
  {
    path: '/',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/recover', component: () => import('pages/Recover.vue') }
    ]
  },
  {
    path: '/resgistered/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/multimidia', component: () => import('pages/Multimidia.vue') },
      { path: '/leitura-diaria', component: () => import('pages/Leitura.vue') },
      { path: '/galeria', component: () => import('pages/Galeria.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
