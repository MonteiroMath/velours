<script>
export default {
  props: ['product']
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
  </div>
</template>

<style>
.cardWrapper {
  border: solid 1px black;
  padding: 1rem;
  height: 200px;
}
</style>
