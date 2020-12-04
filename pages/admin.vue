<template>
  <v-container>
    <h2>Admin</h2>
    <v-card>
      <v-card-text class="pt-4">
        <p>
          Admin Page test
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth-admin']
}
</script>

<style lang="scss" scoped>
</style>
