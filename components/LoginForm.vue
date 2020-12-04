<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-card>
          <v-card-text class="pt-4">
            <v-form v-model="valid">
              <v-text-field v-model="userInfo.email"
                            label="Email"
                            :rules="[required('email'), emailFormat()]"/>
              <v-text-field v-model="userInfo.password"
                            label="Password"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            counter=true
                            :rules="[required('password'), minLength('password', 8)]"/>
              <v-layout justify-space-between>
                <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
                <a href="">Forgot Password</a>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import validation from '@/utils/validation';
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        email: '',
        password: ''
      },
      ...validation
    }
  },
  props: ["submitForm", "buttonText"]
}
</script>

<style scoped>
.loginOverlay {
  background: rgba(33, 150, 243, 0.3);
}
</style>
