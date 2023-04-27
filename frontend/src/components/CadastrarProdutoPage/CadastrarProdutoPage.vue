<script>
import ProductForm from '../ProductForm/ProductForm.vue'

export default {
  components: { ProductForm }
}
</script>

<template>
  <div class="container">
    <header class="h1">Cadastrar Produto</header>
    <ProductForm @update-form="updateState" :formState="formState" :edit="false" />
  </div>
</template>

<style>
.buttonWrapper {
  display: flex;
  column-gap: 1rem;
}
</style>
