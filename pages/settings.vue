<template>
  <v-container>




      <v-card>
        <v-toolbar
          flat
          color="primary"
          dark
          dense
        >
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <v-tab>
            <v-icon left>
              mdi-account
            </v-icon>
            User
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-lock
            </v-icon>
            Profile
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-access-point
            </v-icon>
            other
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-form v-model="valid">

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

                  <v-layout justify-space-between>
                    <v-btn @click="submitForm(profileInfo)" :disabled="!valid">Apply</v-btn>
                  </v-layout>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>

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
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>




    <!-- TODO: settings tabs: user, profile, etc -->
    <!--<v-card>
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
    </v-card>-->
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
