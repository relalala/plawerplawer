<script setup lang="ts">
import { ref } from 'vue'
import LogInForm from './components/auth/LogInForm.vue'
import RegisterForm from './components/auth/RegisterForm.vue'
import ProductList from './components/shop/ProductList.vue'
import OrderPayment from './components/shop/OrderPayment.vue'

const currentView = ref('login')

const navigateTo = (viewName: string) => {
  currentView.value = viewName
}
</script>

<template>
  <div class="app-wrapper">
    <header class="global-nav">
      <div class="logo" @click="navigateTo('shop')">GERALD'S FLOWER SHOP</div>
      <nav class="nav-buttons">
        <button @click="navigateTo('shop')">Shop</button>
        <button @click="navigateTo('checkout')">Cart / Checkout</button>
        <button @click="navigateTo('login')">Log In</button>
        <button @click="navigateTo('register')">Register</button>
      </nav>
    </header>

    <main class="content-body">
      <LogInForm v-if="currentView === 'login'" @go-to-register="navigateTo('register')" @login-success="navigateTo('shop')" />
      <RegisterForm v-else-if="currentView === 'register'" @register-success="navigateTo('shop')" />
      <ProductList v-else-if="currentView === 'shop'" @go-to-checkout="navigateTo('checkout')" />
      <OrderPayment v-else-if="currentView === 'checkout'" @order-complete="navigateTo('shop')" />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'DM Sans', sans-serif;
  background-color: #fffbf7;
  margin: 0;
}

.global-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #956779;
}

.logo {
  font-weight: 800;
  color: #526b50;
  cursor: pointer;
}

.nav-buttons {
  display: flex;
  gap: 1rem;
}

.nav-buttons button {
  background: none;
  border: 1px solid #526b50;
  color: #526b50;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.nav-buttons button:hover {
  background-color: #526b50;
  color: white;
}
</style>