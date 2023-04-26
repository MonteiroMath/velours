<script>
import { store } from '../../store/store.js'
import ProductCard from './ProductCard/ProductCard.vue'

export default {
  data() {
    return {
      store
    }
  },
  components: { ProductCard },
  created() {
    store.getProducts()
  }
}
</script>

<template>
  <div class="container">
    <button @click.prevent="this.$router.push('/cadastrarProduto')">Cadastrar produto</button>
    <div class="productList">
      <ProductCard
        v-for="product in store.products"
        :key="`product-${product.id}`"
        :product="product"
      />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 25rem;

  line-height: 1.5;
  min-height: 100vh;
}

.productList {
  margin-top: 30px;

  width: 80%;
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 1rem;
}

@media screen and (min-width: 1024px) {
  .productList {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
}
</style>
