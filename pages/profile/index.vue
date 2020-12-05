<template>
  <v-container>
    <h2>Profile</h2>
    <v-card>
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
