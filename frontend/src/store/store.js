import { reactive } from 'vue'

export const store = reactive({
  products: [
    {
      id: 1,
      name: 'celular',
      category: 'eletrônicos',
      description: 'quick description',
      price: 599.99,
      quantity: 32
    },
    {
      id: 2,
      name: 'boneco',
      category: 'brinquedos',
      description: 'quick description',
      price: 80,
      quantity: 21
    }
  ],
  addProduct(product) {
    console.log('here')
    this.products.push({ ...product, id: this.products.length }) //temp bad solution
    console.log(this.products)
  },
  removeProduct(id) {
    this.products = this.products.filter((product) => product.id !== id)
  }
})
