<template>
  <v-app-bar color="primary" app>
    <v-btn to="/" icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title>web-ui</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- home link -->
    <v-btn text to="/">Home</v-btn>
    <!-- inspire link -->
    <v-btn text to="/inspire">Inspire</v-btn>
    <!-- admin link -->
    <v-btn text to="/admin" v-if="$auth.user && $auth.user.admin">Admin</v-btn>
    <!-- about link -->
    <v-btn text to="/about">About</v-btn>
    <v-spacer></v-spacer>
    <div v-if="$auth.loggedIn">
      <!-- dropdown user menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-on="on">
            <v-icon left>mdi-account</v-icon>
            {{ profileInfo.profilename }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/profile">
            <v-icon left>mdi-face-profile</v-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item to="/settings">
            <v-icon left class="material-icons">settings</v-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$auth.logout()">
            <v-icon left class="material-icons">logout</v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div v-else>
      <!-- login link -->
      <v-btn text to="/login">
        <v-icon left>
          mdi-login
        </v-icon>
        Login
      </v-btn>
      <!-- register link -->
      <v-btn text to="/register">
        <v-icon left>
          mdi-account-plus
        </v-icon>
        Register
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      profileInfo: {
        profilename: this.$auth.user.name,
      }
    }
  }
}
</script>

<style scoped>

</style>
