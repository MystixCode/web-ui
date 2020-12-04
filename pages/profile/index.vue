<template>
  <v-container>
    <h2>Profile</h2>
    <v-card>
      <v-card-text class="pt-4">
        <p>
          Welcome {{ $auth.user.email }}! this is your profile page
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
