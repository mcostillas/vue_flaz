import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue')
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfServiceView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
