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
  getProduct(id) {
    let index = this.products.findIndex((product) => product.id === parseInt(id))
    return this.products[index]
  },
  addProduct(product) {
    this.products.push({ ...product, id: this.products.length }) //temp bad solution
  },
  editProduct(id, productData) {
    let index = this.products.findIndex((product) => product.id === id)

    this.products[index] = productData
  },
  removeProduct(id) {
    this.products = this.products.filter((product) => product.id !== id)
  }
})
