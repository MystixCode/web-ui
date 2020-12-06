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
        <UserLogo :user_id="this.$auth.user.id"/>
        <h3 class="mb-4">
          {{ profileInfo.profilename }}
        </h3>
        <label>
          Biography:
        </label>
        <p>
          {{ profileInfo.bio }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import UserLogo from "@/components/UserLogo";
import validation from "@/utils/validation";

export default {
  middleware: ['auth'],
  components: {
    UserLogo
  },
  data() {
    return {
      profileInfo: { //TODO get values via axios
        profilename: 'MystixCode',
        bio: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
