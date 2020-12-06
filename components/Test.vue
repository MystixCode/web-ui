<template>
  <div>
    <v-app-bar color="primary">
      <a href="/">
        <v-icon left>mdi-home</v-icon>
      </a>
        <v-toolbar-title>web-ui</v-toolbar-title>
      <v-spacer></v-spacer>

      <nav class="d-none d-sm-flex">
        <div v-for="(link, i) in nav" :key="i" >
          <v-btn text v-if="link.title === 'Admin' && $auth.user && $auth.user.admin" :to="link.url">{{ link.title }}</v-btn>
          <v-btn text v-else-if="link.title !== 'Admin'" :to="link.url">{{ link.title }}</v-btn>
        </div>
      </nav>

      <v-spacer></v-spacer>

      <div v-if="$auth.loggedIn">
        <!-- dropdown user menu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on">
              <v-icon left>mdi-account</v-icon>
              {{ $auth.user.email }}
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


      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = true"></v-app-bar-nav-icon>

    </v-app-bar>



    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="d-flex d-sm-none"
    >

      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >

          <v-list-item v-for="(link, i) in nav" :key="i" :to="link.url">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

  </div>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,

    nav: [
      {
        "id": "1",
        "title": "Home",
        "url": "/",
        "icon": "mdi-home"
      },
      {
        "id": "2",
        "title": "Inspire",
        "url": "/inspire",
        "icon": "mdi-test-tube"
      },
      {
        "id": "3",
        "title": "Admin",
        "url": "/admin",
        "icon": "mdi-alpha-a-box-outline"
      },
      {
        "id": "4",
        "title": "About",
        "url": "/about",
        "icon": "mdi-information-outline"
      }
    ]

  }),
}
</script>

<style scoped>

</style>
