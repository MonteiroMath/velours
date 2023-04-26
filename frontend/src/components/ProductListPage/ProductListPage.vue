<script>
export default {
  data: () => {
    return {
      products: [
        {
          name: 'celular',
          category: 'eletrônicos',
          description: 'quick description',
          price: 599.99,
          quantity: 32
        },
        {
          name: 'boneco',
          category: 'brinquedos',
          description: 'quick description',
          price: 80,
          quantity: 21
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-for="(product, index) in products" :key="`product-${index}`">
      <p>
        Nome: <span>{{ product.name }}</span>
      </p>
      <p>
        Categoria: <span>{{ product.category }}</span>
      </p>
      <p>
        Preço: <span>{{ product.price }}</span>
      </p>
    </div>
  </div>
</template>

<style>
.container {
  margin-top: 25rem;

  line-height: 1.5;
  min-height: 100vh;
}
</style>
