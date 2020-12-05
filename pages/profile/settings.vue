<template>
  <v-container>
    <h2>Profile Settings</h2>
    <v-card>
      <v-card-text class="pt-4">

        <UserLogo/>

        <form @submit.prevent="uploadFile">
          <input type="file" @change="changeFile">
          <v-btn type="submit" :disabled="!files">Upload</v-btn>
        </form>

        <v-form v-model="valid">
          <v-text-field
            v-model="profileInfo.username"
            label="Username"
            :rules="[required('username')]"/>
          <v-text-field
            v-model="profileInfo.email"
            label="Email"
            :rules="[required('email'), emailFormat()]"/>
          <v-text-field
            v-model="profileInfo.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            counter=true
            :rules="[required('password'), minLength('password', 8)]"/>

          <v-textarea
            v-model="profileInfo.bio"
            filled
            name="input-7-4"
            label="Bio"/>

          <v-layout justify-space-between>
            <v-btn @click="submitForm(profileInfo)" :disabled="!valid">Apply</v-btn>
          </v-layout>
        </v-form>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import validation from "@/utils/validation";
import UserLogo from "@/components/UserLogo"

export default {
  middleware: ['auth'],
  components: {
    UserLogo
  },
  data() {
    return {
      files: null,
      valid: false,
      showPassword: false,
      profileInfo: {
        username: '', //TODO
        email: this.$auth.user.email,
        password: '',
        bio: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.' //TODO
      },
      ...validation
    }
  },
  methods: {
    submitForm(profileInfo){
      console.log(profileInfo)
    },
    changeFile (event) {
      this.files = event.target.files
    },
    uploadFile() {
      const formData = new FormData();
      formData.append('files', this.file)
      this.$axios.post('http://localhost:8080/api/v1/profile/me/image/upload', formData, { //TODO: path is just example
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
