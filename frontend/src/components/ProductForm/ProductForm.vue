<script>
export default {
  props: ['formState']
}
</script>

<template>
  <form class="formWrapper">
    <div class="inputField mb-3">
      <label>Nome*:</label>
      <input
        class="form-control"
        type="text"
        :value="formState.name"
        @input="this.$emit('update-form', 'name', $event.target.value)"
        placeholder="Ex.: Moto G"
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Categoria*:</label>
      <input
        class="form-control"
        type="text"
        :value="formState.category"
        @input="this.$emit('update-form', 'category', $event.target.value)"
        placeholder="Ex.: Celular"
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Preço*:</label>
      <input
        class="form-control"
        type="text"
        :value="formState.price"
        @input="this.$emit('update-form', 'price', $event.target.value)"
        placeholder="Ex.: 500.00"
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Quantidade*:</label>
      <input
        class="form-control"
        type="text"
        :value="formState.quantity"
        @input="this.$emit('update-form', 'quantity', $event.target.value)"
        placeholder="Ex.: 30"
      />
    </div>
    <div class="inputField mb-3">
      <label class="form-label">Descrição*:</label>
      <input
        class="form-control"
        type="text"
        :value="formState.description"
        @input="this.$emit('update-form', 'description', $event.target.value)"
        placeholder="Ex.: Informações extras"
      />
    </div>
  </form>
</template>
