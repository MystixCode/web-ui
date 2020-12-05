<template>
  <v-container>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
        dense
      >
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>

    <RegisterForm buttonText="Register" :submitForm="registerUser" />
    </v-card>
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
