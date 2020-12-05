<template>
  <v-container>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
        dense
      >
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
    <LoginForm buttonText="Login" :submitForm="loginUser" />
    </v-card>
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
