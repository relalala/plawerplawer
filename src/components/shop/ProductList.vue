<script setup lang="ts">
import { ref, computed } from 'vue'
import { products, addToCart, totalCartItems } from '@/cart/cart.ts'

const search = ref('')

const filteredProducts = computed(() => {
  return products.value.filter(product =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div class="shop-container">

    <div class="top-nav">
      <div class="form-header">
        <h4><i>YOUR MOMENTS IN FULL BLOOM</i></h4>
        <h2><b>GERALD'S FLOWER SHOP</b></h2>
      </div>

      <RouterLink to="/cart" class="cart-badge-link">
        <div class="cart-badge">
          🛒 Cart: <span>{{ totalCartItems }}</span>
        </div>
      </RouterLink>
    </div>

    <div class="search-bar">
      <h4>Search flowers</h4>
      <div class="search-input-group">
        <input
            type="text"
            v-model="search"
            placeholder="Search here"
        />
      </div>
    </div>

    <div class="product-grid">
      <div v-for="flower in filteredProducts" :key="flower.id" class="product-card">
        <img :src="flower.image" :alt="flower.name" class="product-img" />
        <div class="product-info">
          <h3>{{ flower.name }}</h3>
          <p class="price">₱{{ flower.price }} / stem</p>

          <div class="card-footer">
            <button @click="addToCart(flower)" class="add-btn">Add to Cart</button>
            <span class="qty-display" v-if="flower.quantity > 0">In Cart: {{ flower.quantity }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
body {
  font-family: 'DM Sans', sans-serif;
  background-color: #fffbf7;
  margin: 0;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.shop-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem 2rem 2rem;
  font-family: 'DM Sans', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.top-nav {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.cart-badge {
  background-color: #526b50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-header h4 {
  color: #956779;
  margin: 0;
  padding-top: 20px;
}

.form-header h2 {
  color: #526b50;
  margin: 0;
  font-weight: 1000;
}

.search-bar {
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
}

.search-bar h4 {
  color: #526b50;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.search-input-group {
  display: flex;
  gap: 0.5rem;
  width: 100%;
}

input {
  color: #956779;
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #956779;
  border-radius: 6px;
  outline: none;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 2.5rem;
}

.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  border: 1px solid #956779;
}

.product-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.product-info h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.price {
  color: #956779;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.card-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-btn {
  background-color: #526b50;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.add-btn:active {
  background-color: #956779;
}

.qty-display {
  font-size: 0.85rem;
  color: #526b50;
  font-weight: 600;
  text-align: center;
}

.cart-badge-link {
  text-decoration: none;
}
</style>