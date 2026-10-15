import { ref, computed } from 'vue'

export const products = ref([
    { id: 1, name: 'Gerbera', price: 50, image: 'Gerbera.jpg', quantity: 0 },
    { id: 2, name: 'Rose', price: 100, image: 'rose.jpg', quantity: 0 },
    { id: 3, name: 'Sunflower', price: 150, image: 'sunflower.jpg', quantity: 0 },
    { id: 4, name: 'Tulips', price: 150, image: 'tulips.jpg', quantity: 0 },
    { id: 5, name: 'Carnation', price: 80, image: 'carnation.jpg', quantity: 0 },
    { id: 6, name: 'Stargazer Lily', price: 250, image: 'stargazer.jpg', quantity: 0 },
    { id: 7, name: 'Chrysanthemum', price: 60, image: 'chrysanthemum.jpg', quantity: 0 }
])

// Function to add items
export const addToCart = (product: any) => {
    product.quantity++
}

// Function to remove or clear items from cart
export const removeFromCart = (product: any) => {
    if (product.quantity > 0) {
        product.quantity--
    }
}

// Compute only items that have been added (quantity > 0)
export const cartItems = computed(() => {
    return products.value.filter(p => p.quantity > 0)
})

// Compute total price of items in the cart
export const cartTotal = computed(() => {
    return cartItems.value.reduce((total, p) => total + (p.price * p.quantity), 0)
})

// Total badge count
export const totalCartItems = computed(() => {
    return products.value.reduce((total, p) => total + p.quantity, 0)
})