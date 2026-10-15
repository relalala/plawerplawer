<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { loginUser } from './useAuth.ts'

const Username = ref('')
const Password = ref('')
const router = useRouter()

const handleLogin = () => {
  loginUser(Username.value)

  console.log('Username logged in:', Username.value)
  console.log('Password:', Password.value)

  router.push('./shop/ProductList.vue')
}
</script>

<template>
  <div class="page-container">
    <div class="background">

      <div class="form-header">
        <h2>welcome back!</h2>
        <p class="subtitle">please enter your details to log in.</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-account">
          <label for="Username">Username:</label>
          <input
              id="Username"
              type="text"
              v-model="Username"
              placeholder="Enter username"
              required
          />
        </div>

        <div class="form-account">
          <label for="Password">Password:</label>
          <input
              id="Password"
              type="password"
              v-model="Password"
              placeholder="Enter password"
              required
          />
        </div>

        <button type="submit" class="btn">Log In</button>
      </form>

        <div class="create-account">
          <p class='subtitle'> don't have an account yet? <RouterLink to="./auth/RegisterForm.vue">create one here</RouterLink> </p>
        </div>

    </div>
  </div>
</template>

<style>
body {
  background-color: #fffbf7;
  font-family: 'DM Sans', sans-serif;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.page-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 350px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-header {
  text-align: center;
  margin-bottom: 0.5rem;
}

.form-header h2 {
  margin: 0 0 0 0;
  font-size: 1.75rem;
  color: #526b50;
}

.subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #526b50;
  text-align: center;
}

.form-account {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: 'DM Sans', sans-serif;
}

label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #526b50;
}

.create-account a {
  color: #956779;
  font-weight: 600;
}

input {
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 1px solid #956779;
  border-radius: 6px;
  outline: none;
  color: #956779;
}

.btn {
  padding: 0.7rem;
  font-size: 1rem;
  background-color: #526b50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.btn:active {
  background-color: #956779;
}
</style>