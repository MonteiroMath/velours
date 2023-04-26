import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ProductListPage from '../components/ProductListPage/ProductListPage.vue'
import CadastrarProdutoPage from '../components/CadastrarProdutoPage/CadastrarProdutoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductListPage
    },
    {
      path: '/cadastrarProduto',
      name: 'cadastrar-produto',
      component: CadastrarProdutoPage
    }
  ]
})

export default router
