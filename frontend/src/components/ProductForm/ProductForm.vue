<script>
export default {
  props: ['formState']
}
</script>

<template>
  <form class="formWrapper">
    <div class="inputField">
      <label>Nome*:</label>
      <input
        type="text"
        :value="formState.name"
        @input="this.$emit('update-form', 'name', $event.target.value)"
        placeholder="Ex.: Moto G"
      />
    </div>
    <div class="inputField">
      <label>Categoria*:</label>
      <input
        type="text"
        :value="formState.category"
        @input="this.$emit('update-form', 'category', $event.target.value)"
        placeholder="Ex.: Celular"
      />
    </div>
    <div class="inputField">
      <label>Preço*:</label>
      <input
        type="text"
        :value="formState.price"
        @input="this.$emit('update-form', 'price', $event.target.value)"
        placeholder="Ex.: 500.00"
      />
    </div>
    <div class="inputField">
      <label>Quantidade*:</label>
      <input
        type="text"
        :value="formState.quantity"
        @input="this.$emit('update-form', 'quantity', $event.target.value)"
        placeholder="Ex.: 30"
      />
    </div>
    <div class="inputField">
      <label>Descrição*:</label>
      <input
        type="text"
        :value="formState.description"
        @input="this.$emit('update-form', 'description', $event.target.value)"
        placeholder="Ex.: Informações extras"
      />
    </div>
  </form>
</template>
