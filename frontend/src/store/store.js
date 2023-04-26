import { reactive } from 'vue'
import { client } from '../api/client'

export const store = reactive({
  products: [],
  async getProducts() {
    let result = await fetchProducts()

    if (result.success) this.products = result.products
  },
  getProduct(id) {
    let index = this.products.findIndex((product) => product.id == id)

    return this.products[index]
  },
  async addProduct(product) {
    let result = await postProduct(product)
    if (result.success) this.products.push(result.product)
  },
  async editProduct(id, productData) {
    let result = await updateProduct(productData)

    if (result.success) {
      let index = this.products.findIndex((product) => product.id === id)

      this.products[index] = productData
    }
  },
  async removeProduct(id) {
    await deleteProduct({ id })
    this.products = this.products.filter((product) => product.id !== id)
  }
})

const fetchProducts = async () => {
  const response = await client.get('/')
  return response
}

const postProduct = async (params) => {
  const { name, category, description, price, quantity, image } = params

  const response = await client.post('/', {
    name,
    category,
    description,
    price: parseFloat(price),
    quantity: parseInt(quantity),
    image: 'www.google.com'
  })

  return response
}

const updateProduct = async (params) => {
  const { id, name, category, description, price, quantity, image } = params

  const response = await client.put(`/${id}`, {
    name,
    category,
    description,
    price,
    quantity,
    image: 'www.google.com'
  })

  return response
}

const deleteProduct = async (params) => {
  const { id } = params
  const response = await client.delete(`/${id}`)
  return response
}
