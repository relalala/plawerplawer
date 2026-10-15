<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from './useAuth.ts'

const Username = ref('')
const Email = ref('')
const Password = ref('')
const ConfirmPassword = ref('')
const router = useRouter()

const handleRegister = () => {
  if (Password.value !== ConfirmPassword.value) {
    alert("Passwords do not match!")
    return
  }

  loginUser(Username.value)

  console.log('Username:', Username.value)
  console.log('Email:', Email.value)
  console.log('Password:', Password.value)
  console.log('ConfirmPassword:', ConfirmPassword.value)

  router.push('./shop/ProductList.vue')
}
</script>

<template>
  <div class = 'page-container'>
    <div class = 'background'>

      <div class = 'form-header'>
        <h2> create your account </h2>
      </div>

      <form @submit.prevent="handleRegister" class="register-form-container">
        <div class = 'register-form'>
          <label for = 'Username'> Username: </label>
          <input
              id = 'Username'
              type = 'text'
              v-model = 'Username'
              placeholder = 'Enter username'
              required
          />
        </div>

        <div class = 'register-form'>
          <label for = 'Email'> Email: </label>
          <input
              id = 'Email'
              type = 'text'
              v-model = 'Email'
              placeholder = 'Enter a valid email address'
              required
          />
        </div>

        <div class = 'register-form'>
          <label for = 'Password'> Password: </label>
          <input
              id = 'Password'
              type = 'password'
              v-model = 'Password'
              placeholder = 'Enter password'
              required
          />
        </div>

        <div class = 'register-form'>
          <label for = 'ConfirmPassword'> Confirm Password: </label>
          <input
              id = 'ConfirmPassword'
              type = 'password'
              v-model = 'ConfirmPassword'
              placeholder = 'Confirm password'
              required
          />
        </div>

        <button type = 'submit' class = 'register-button'>Create Account</button>

      </form>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f7dce5;
  font-family: DM Sans, sans-serif;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background {
  background-color: #fffbf7;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 350px;
}

.register-form-container {
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

label {
  color: #526b50
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: 'DM Sans', sans-serif;
}

input {
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 1px solid #956779;
  border-radius: 6px;
  outline: none;
  color: #956779;
}

.register-button {
  padding: 0.7rem;
  font-size: 1rem;
  background-color: #526b50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.register-button:active {
  background-color: #956779;
}
</style>