import { ref } from 'vue'

export const currentUser = ref({
    Username: '',
    isLoggedIn: false
})

export const loginUser = (Name: string) => {
    currentUser.value.Username = Name
    currentUser.value.isLoggedIn = true
}