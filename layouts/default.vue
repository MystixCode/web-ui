<template>
  <v-app>
    <NavBar />
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer app class="justify-center">
      <span>mystixcode.tk &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>
