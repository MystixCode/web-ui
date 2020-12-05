<template>
  <div>
    <v-avatar v-if="this.$auth.user.image" size="128">
      <!-- TODO get actual user image path instead of v.png -->
      <img
           src="@/static/v.png"
           class="UserLogo"
           alt="User Logo"
      >
    </v-avatar>
    <v-avatar v-else size="128">
      <img
           src="/user-logo2.svg"
           class="UserLogo"
           alt="User Logo"
      >
    </v-avatar>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>
