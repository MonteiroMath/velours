<script>
import validator from 'validator'
import { store } from '../../store/store'

export default {
  data() {
    return {
      store,
      formState: store.getProduct(this.$route.params.id),
      error: {
        name: false,
        category: false,
        image: false,
        price: false,
        quantity: false
      }
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
      let isFormInvalid = Object.values(this.error).some((element) => element)

      if (isFormInvalid) alert('Há erros de validação para correção')
      else this.edit ? this.editProduct() : this.addProduct()
    },
    validate(field, value) {
      const validators = {
        name: (value) => validator.isAlphanumeric(value, 'pt-BR', { ignore: ' ' }),
        category: (value) => validator.isAlpha(value, 'pt-BR'),
        price: (value) => validator.isCurrency(value) && parseFloat(value) > 0,
        quantity: (value) => validator.isInt(value) && parseInt(value) > 0,
        image: (value) => validator.isURL(value)
      }

      let isValid = validators[field](value)
      if (!isValid) this.error[field] = true
      else this.error[field] = false
    }
  },
  watch: {
    'formState.name'(newValue) {
      this.validate('name', newValue)
    },
    'formState.category'(newValue) {
      this.validate('category', newValue)
    },
    'formState.price'(newValue) {
      this.validate('price', newValue)
    },
    'formState.quantity'(newValue) {
      this.validate('quantity', newValue)
    },
    'formState.image'(newValue) {
      this.validate('image', newValue)
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
      <div class="mt-3 text-danger" v-if="error.name">Nome inválido.</div>
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
      <div class="mt-3 text-danger" v-if="error.category">Categoria inválida.</div>
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Preço*:</label>
      <input
        class="form-control"
        type="text"
        v-model="formState.price"
        placeholder="Ex.: 500.00"
        required
      />
      <div class="mt-3 text-danger" v-if="error.price">Preço inválido.</div>
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Quantidade*:</label>
      <input
        class="form-control"
        type="text"
        v-model="formState.quantity"
        placeholder="Ex.: 30"
        required
      />
      <div class="mt-3 text-danger" v-if="error.quantity">Quantidade inválida.</div>
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Imagem*:</label>
      <input
        class="form-control"
        type="url"
        v-model="formState.image"
        placeholder="Ex.: url de uma imagem"
        required
      />
      <div class="mt-3 text-danger" v-if="error.image">Url inválida.</div>
    </div>
    <div class="buttonWrapper">
      <button class="btn btn-danger" @click.prevent="this.$router.push('/')">Cancelar</button>
      <input type="submit" class="btn btn-primary" @click.prevent="submitForm" value="Enviar" />
    </div>
  </form>
</template>
