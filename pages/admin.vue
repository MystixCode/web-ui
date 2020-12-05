<template>
  <v-container>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
        dense
      >
        <v-toolbar-title>Admin</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pt-4">
        <p>
          Todo maybe use this as admin overview page and import components like userlist etc.
        </p>
        <UserList/>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import UserList from "@/components/UserList"

export default {
  middleware: ['auth-admin'],
  components: {
    UserList
  }
}
</script>

<style lang="scss" scoped>
</style>
