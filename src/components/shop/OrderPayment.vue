<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { currentUser } from '../auth/useAuth'
import { cartItems, cartTotal, addToCart, removeFromCart } from '@/cart/cart'

const router = useRouter()

const customerName = ref(currentUser.value.Username || '')
const contactNumber = ref('')
const deliveryAddress = ref('')
const paymentMethod = ref('')

const handleCheckout = () => {
  if (cartItems.value.length === 0) {
    alert("Your cart is empty!")
    return
  }

  if (!customerName.value || !contactNumber.value || !deliveryAddress.value) {
    alert("Please fill in all delivery details.")
    return
  }

  console.log('Order Placed Successfully!', {
    customer: customerName.value,
    contact: contactNumber.value,
    address: deliveryAddress.value,
    paymentMethod: paymentMethod.value,
    items: cartItems.value,
    total: cartTotal.value
  })

  alert(`Thank you for your order, ${customerName.value}! Payment via ${paymentMethod.value.toUpperCase()} is confirmed.`)

  router.push('./shop/ProductList.vue')
}
</script>

<template>
  <div class="cart-page">
    <div class="cart-container">

      <!-- Back to shop link -->
      <RouterLink to="./shop/ProductList.vue" class="back-link">← Continue Shopping</RouterLink>

      <h2>Checkout & Payment</h2>

      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Your cart is currently empty.</p>
        <RouterLink to="./shop/ProductList.vue" class="shop-now-btn">Browse Flowers</RouterLink>
      </div>

      <div v-else class="cart-content-grid">

        <div class="cart-items-section">
          <h3>Order Summary</h3>

          <div v-for="item in cartItems" :key="item.id" class="cart-item-card">
            <img :src="item.image" :alt="item.name" class="item-img" />
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p class="item-price">₱{{ item.price }} × {{ item.quantity }}</p>
            </div>

            <div class="item-actions">
              <button @click="removeFromCart(item)" class="qty-btn">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="addToCart(item)" class="qty-btn">+</button>
            </div>

            <div class="item-subtotal">
              <p>₱{{ item.price * item.quantity }}</p>
            </div>
          </div>

          <div class="cart-total-box">
            <span>Total Amount:</span>
            <span class="total-price">₱{{ cartTotal }}</span>
          </div>
        </div>

        <div class="checkout-section">
          <h3>Delivery & Payment Details</h3>
          <form @submit.prevent="handleCheckout" class="checkout-form">

            <div class="form-group">
              <label for="name">Account / Customer Name</label>
              <input id="name" type="text" v-model="customerName" placeholder="Enter your name" required />
            </div>

            <div class="form-group">
              <label for="contact">Contact Number</label>
              <input id="contact" type="text" v-model="contactNumber" placeholder="e.g. 09123456789" required />
            </div>

            <div class="form-group">
              <label for="address">Delivery Address</label>
              <textarea id="address" v-model="deliveryAddress" placeholder="Enter complete delivery address" rows="3" required></textarea>
            </div>

            <div class="form-group">
              <label>Select Mode of Payment</label>
              <div class="payment-options">
                <label class="radio-label">
                  <input type="radio" value="gcash" v-model="paymentMethod" /> GCash
                </label>
                <label class="radio-label">
                  <input type="radio" value="cod" v-model="paymentMethod" /> Cash on Delivery (COD)
                </label>
                <label class="radio-label">
                  <input type="radio" value="card" v-model="paymentMethod" /> Credit / Debit Card
                </label>
              </div>
            </div>

            <button type="submit" class="checkout-btn">Confirm & Pay ₱{{ cartTotal }}</button>
          </form>
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

.cart-page {
  min-height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
}

.cart-container {
  width: 100%;
  max-width: 900px;
}

.back-link {
  text-decoration: none;
  color: #526b50;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

h2 {
  color: #526b50;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.empty-cart {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  border: 1px solid #956779;
}

.shop-now-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #526b50;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}

.cart-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .cart-content-grid {
    grid-template-columns: 1fr;
  }
}

.cart-items-section, .checkout-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #956779;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}

.cart-items-section h3, .checkout-section h3 {
  margin-top: 0;
  color: #526b50;
  font-size: 1.2rem;
  border-bottom: 1px solid #f0eae1;
  padding-bottom: 0.5rem;
}

.cart-item-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f9f6f0;
}

.item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  margin: 0;
  color: #333;
  font-size: 0.95rem;
}

.item-price {
  margin: 0;
  color: #956779;
  font-size: 0.85rem;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.qty-btn {
  background: #526b50;
  color: white;
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.item-subtotal p {
  font-weight: 600;
  color: #526b50;
  margin: 0;
}

.cart-total-box {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #f0eae1;
  font-weight: bold;
  color: #333;
}

.total-price {
  color: #526b50;
  font-size: 1.2rem;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #526b50;
}

input, textarea {
  padding: 0.6rem;
  border: 1px solid #956779;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  color: #956779;
  background-color: #fff;
}

input:focus, textarea:focus {
  border-color: #526b50;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.2rem;
}

.radio-label {
  font-weight: normal;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  cursor: pointer;
}

.checkout-btn {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: #526b50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.checkout-btn:hover {
  background-color: #425640;
}

.checkout-btn:active {
  background-color: #956779;
}
</style>