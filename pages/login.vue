<template>
  <v-container>
    <h2>Login</h2>
    <LoginForm buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  components: {
    LoginForm
  },
  methods: {
    async loginUser(userInfo) {
      try {
        await this.$auth.loginWith('customStrategy', {
          data: userInfo
        })
        console.log('logged in ok')
        this.$router.push('/')
      } catch {
        console.log('login error')
      }
    }
  }
}
</script>
