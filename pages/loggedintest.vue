<template>
  <v-container>
    <h2>LoggedInTest</h2>
    <v-card>
      <v-card-text class="pt-4">
        <p>
          you are logged in
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth']
}
</script>

<style lang="scss" scoped>
</style>
