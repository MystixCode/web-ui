<template>
  <v-container>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
        dense
      >
        <v-toolbar-title>Profile</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pt-4">
        <UserLogo/>
        <p>
          {{ $auth.user.email }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import UserLogo from "@/components/UserLogo";

export default {
  middleware: ['auth'],
  components: {
    UserLogo
  },
}
</script>

<style lang="scss" scoped>
</style>
