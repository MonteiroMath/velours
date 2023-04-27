<script>
import { store } from '../../store/store'
import ProductForm from '../ProductForm/ProductForm.vue'

export default {
  data() {
    return {
      store,
      formState: store.getProduct(this.$route.params.id)
    }
  },
  methods: {
    editProduct() {
      store.editProduct(this.$route.params.id, this.formState).then(() => this.$router.push('/'))
    },
    updateState(field, value) {
      this.formState[field] = value
    }
  },
  components: { ProductForm }
}
</script>

<template>
  <div class="container">
    <header>Editar Produto</header>
    <ProductForm @update-form="updateState" :formState="formState" />

    <div class="buttonWrapper">
      <button @click.prevent="this.$router.push('/')">Cancelar</button>
      <button @click.prevent="editProduct">Enviar</button>
    </div>
  </div>
</template>
