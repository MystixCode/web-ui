<template>
  <v-container>
    <h2>Admin</h2>
    <v-card>
      <v-card-text class="pt-4">
        <p>
          Admin Page test
        </p>
        <p>
          Todo maybe create a userlist component and include it here with other components as overview page
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
