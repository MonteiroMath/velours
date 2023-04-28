<script>
import ProductForm from '../ProductForm/ProductForm.vue'

export default {
  components: { ProductForm }
}
</script>

<template>
  <div class="container">
    <header class="h1">Editar Produto</header>
    <ProductForm :edit="true" />
  </div>
</template>
