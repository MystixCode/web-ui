<template>
  <div>

    <v-avatar v-if="user_id" size="128">
      <!-- TODO get actual user image path instead of v.png -->
      <img
           src="/default_picture.svg"
           class="UserLogo"
           alt="User Logo"
      >
    </v-avatar>
  </div>
</template>

<script>
  export default {
    props: ["user_id"],
  }

</script>

<style lang="scss" scoped>
</style>
