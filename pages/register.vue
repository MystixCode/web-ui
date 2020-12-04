<template>
  <v-container>
    <h2>Register</h2>
    <RegisterForm buttonText="Register" :submitForm="registerUser" />
  </v-container>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";
export default {
  components: {
    RegisterForm
  },
  methods: {
    async registerUser(userInfo) {
      try{
        //create new user
        await this.$axios.post('/users', userInfo)
        //log in with new user
        await this.$auth.loginWith('CustomStrategy', {
          data: userInfo
        })
        console.log('logged in with new user')
      } catch {
        console.log('error creating new user')
      }
    }
  }
}
</script>
