<script>
import { store } from '../../store/store'

export default {
  data() {
    return {
      store,
      formState: store.getProduct(this.$route.params.id)
    }
  },
  methods: {
    editProduct() {
      store.editProduct(this.$route.params.id, this.formState)
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="container">
    <header>Editar Produto</header>
    <div class="formWrapper">
      <div class="inputField">
        <label>Nome*:</label>
        <input type="text" v-model="formState.name" placeholder="Ex.: Moto G" />
      </div>
      <div class="inputField">
        <label>Categoria*:</label>
        <input type="text" v-model="formState.category" placeholder="Ex.: Celular" />
      </div>
      <div class="inputField">
        <label>Preço*:</label>
        <input type="text" v-model.number="formState.price" placeholder="Ex.: 500.00" />
      </div>
      <div class="inputField">
        <label>Nome*:</label>
        <input type="text" v-model.number="formState.quantity" placeholder="Ex.: 30" />
      </div>
      <div class="inputField">
        <label>Descrição*:</label>
        <input type="text" v-model="formState.description" placeholder="Ex.: Informações extras" />
      </div>
    </div>

    <div class="buttonWrapper">
      <button @click.prevent="this.$router.push('/')">Cancelar</button>
      <button @click.prevent="editProduct">Enviar</button>
    </div>
  </div>
</template>
