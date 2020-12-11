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
        await this.$axios.post('http://192.168.1.150:8080/api/v1/users', userInfo)
        //log in with new user
        await this.$auth.loginWith('customStrategy', {
          data: userInfo
        })
        //this.$router.push('/')
        console.log('logged in with new user')
      } catch (e) {
        console.log('error creating new user', e)
      }
    }
  }
}
</script>
