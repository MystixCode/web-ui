<template>
  <v-app-bar color="primary" app>
    <v-btn to="/" icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title>Logic Programmer</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- home link -->
    <v-btn text to="/">Home</v-btn>
    <!-- loggedintest link -->
    <v-btn text to="/loggedintest" v-if="$auth.loggedIn">LoggedInTest</v-btn>
    <!-- admin link -->
    <v-btn text to="/admin" v-if="$auth.user && $auth.user.admin">Admin</v-btn>
    <!-- inspire link -->
    <v-btn text to="/inspire">Inspire</v-btn>
    <!-- about link -->
    <v-btn text to="/about">About</v-btn>
    <v-spacer></v-spacer>
    <div v-if="$auth.loggedIn">
      <!-- username -->



      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-on="on">
            <v-icon left>mdi-account</v-icon>
            {{ $auth.user.email }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/profile">
            <v-icon left>mdi-face-profile</v-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item to="/profile/settings">
            <v-icon left class="material-icons">settings</v-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item to="/logout">
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
    <!-- <v-btn v-if="login" to="/login">
      <v-icon left>
        mdi-login
      </v-icon>
      login
    </v-btn>
    <v-menu v-if="!login" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-on="on"
        >
          <v-icon left>mdi-account</v-icon>
          Username
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/profile">
          <v-icon left>mdi-face-profile</v-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/profile/settings">
          <v-icon left class="material-icons">settings</v-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item to="/logout">
          <v-icon left class="material-icons">logout</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    //login: true
  })
}
</script>

<style scoped>

</style>
