<script>
import { store } from '../../store/store'
import ProductForm from '../ProductForm/ProductForm.vue'

export default {
  data() {
    return {
      store,
      formState: {
        name: '',
        category: '',
        description: '',
        price: '',
        quantity: ''
      }
    }
  },
  methods: {
    addProduct() {
      store.addProduct(this.formState).then(() => this.$router.push('/'))
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
    <header>Cadastrar Produto</header>
    <ProductForm @update-form="updateState" :formState="formState" />

    <div class="buttonWrapper">
      <button @click.prevent="this.$router.push('/')">Cancelar</button>
      <button @click.prevent="addProduct">Enviar</button>
    </div>
  </div>
</template>
