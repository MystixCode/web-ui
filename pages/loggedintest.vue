<template>
  <v-container>
    <h2>LoggedInTest</h2>
    <v-card>
      <v-card-text class="pt-4">
        <p>
          you are logged in
        </p>



        <form @submit.prevent="handleSubmit">

            <input type="file" @change="uploadFile">
            <v-btn type="submit">Upload</v-btn>

        </form>



      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      files: null
    };
  },
  methods: {
    uploadFile (event) {
      this.files = event.target.files
    },
    handleSubmit() {
      const formData = new FormData();

        formData.append('files', this.file)

      this.$axios.post('http://localhost:4000/api/file-upload', formData, { //TODO: path is just example
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#dropzone {
  border: 1px solid red;
}
</style>
