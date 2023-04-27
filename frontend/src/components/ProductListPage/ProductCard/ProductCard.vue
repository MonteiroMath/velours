<script>
import { store } from '../../../store/store'
import IconEdit from '../../icons/IconEdit.vue'
import IconDelete from '../../icons/IconDelete.vue'

export default {
  props: ['product'],
  methods: {
    editProduct(id) {
      this.$router.push(`/editarProduto/${id}`)
    },
    deleteProduct(id) {
      let confirmation = confirm('Deseja remover o produto? Essa operação não poderá ser defeita.')
      if (confirmation) store.removeProduct(id)
    }
  },
  components: { IconEdit, IconDelete }
}
</script>

<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" alt="..." />
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        Categoria: <span>{{ product.category }}</span>
      </p>
      <p class="card-text">
        Preço: <span>{{ product.price }}</span>
      </p>
      <p class="card-text">
        Quantidade: <span>{{ product.quantity }}</span>
      </p>
    </div>
    <div class="card-body icon-bar">
      <IconEdit @click="editProduct(product.id)" />
      <IconDelete @click="deleteProduct(product.id)" />
    </div>
  </div>
</template>

<style>
.icon-bar {
  display: flex;
  column-gap: 1rem;
}
</style>
