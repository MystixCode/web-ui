<template>
  <v-app>
    <Test />
    <!--<NavBar />-->
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer app class="justify-center">
      <span>mystixcode.tk &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Test from "@/components/Test";
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
    Test
  }
}
</script>

<style>
  html { overflow-y: auto }
</style>
