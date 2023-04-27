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
    addProduct() {
      store.addProduct(this.formState).then(() => this.$router.push('/'))
    },
    editProduct() {
      store.editProduct(this.$route.params.id, this.formState).then(() => this.$router.push('/'))
    },
    submitForm() {
      console.log(typeof this.edit)
      this.edit ? this.editProduct() : this.addProduct()
    }
  },
  props: ['edit']
}
</script>

<template>
  <form class="formWrapper">
    <div class="inputField mb-3">
      <label>Nome*:</label>
      <input
        class="form-control"
        type="text"
        v-model="formState.name"
        placeholder="Ex.: Moto G"
        required
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Categoria*:</label>
      <input
        class="form-control"
        type="text"
        v-model="formState.category"
        placeholder="Ex.: Celular"
        required
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Preço*:</label>
      <input
        class="form-control"
        type="number"
        v-model="formState.price"
        placeholder="Ex.: 500.00"
        required
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Quantidade*:</label>
      <input
        class="form-control"
        type="number"
        v-model="formState.quantity"
        placeholder="Ex.: 30"
        required
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Descrição*:</label>
      <input
        class="form-control"
        type="text"
        v-model="formState.description"
        placeholder="Ex.: Informações extras"
        required
      />
    </div>
    <div class="buttonWrapper">
      <button class="btn btn-danger" @click.prevent="this.$router.push('/')">Cancelar</button>
      <input type="submit" class="btn btn-primary" @click.prevent="submitForm" value="Enviar" />
    </div>
  </form>
</template>
