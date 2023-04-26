import { createRouter, createWebHistory } from 'vue-router'
import ProductListPage from '../components/ProductListPage/ProductListPage.vue'
import CadastrarProdutoPage from '../components/CadastrarProdutoPage/CadastrarProdutoPage.vue'
import EditarProdutoPage from '../components/EditarProdutoPage/EditarProdutoPage.vue'

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
      name: 'cadastrarProduto',
      component: CadastrarProdutoPage
    },
    {
      path: '/editarProduto/:id',
      name: 'editarProduto',
      component: EditarProdutoPage
    }
  ]
})

export default router
