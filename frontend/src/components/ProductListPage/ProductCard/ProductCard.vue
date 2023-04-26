<script>
import IconEdit from '../../icons/IconEdit.vue'
import IconDelete from '../../icons/IconDelete.vue'

export default {
  props: ['product'],
  methods: {
    editProduct(id) {
      this.$router.push(`/editarProduto/${id}`)
    }
  },
  components: { IconEdit, IconDelete }
}
</script>

<template>
  <div class="cardWrapper">
    <p>
      Nome: <span>{{ product.name }}</span>
    </p>
    <p>
      Categoria: <span>{{ product.category }}</span>
    </p>
    <p>
      Preço: <span>{{ product.price }}</span>
    </p>
    <p>
      Quantidade: <span>{{ product.quantity }}</span>
    </p>

    <IconEdit @click="editProduct(product.id)" />
    <IconDelete />
  </div>
</template>

<style>
.cardWrapper {
  border: solid 1px black;
  padding: 1rem;
  height: 200px;
}
</style>
