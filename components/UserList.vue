<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list dense>
      <v-subheader>USERS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(user, i) in users" :key="i">
          <v-list-item-icon>
            <v-icon v-text="user.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="user.name"/>
            <v-list-item-subtitle v-text="user.id"/>
            <v-list-item-subtitle v-text="user.bio"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "UserList",
  data: () => ({
    selectedItem: null,
    users: [
      { id: '1', name: 'testname1', bio: 'bio test test bla1', icon: 'mdi-account' },
      { id: '2', name: 'testname2', bio: 'bio test test bla2', icon: 'mdi-account' },
      { id: '3', name: 'testname3', bio: 'bio test test bla3', icon: 'mdi-account' },
      { id: '4', name: 'testname4', bio: 'bio test test bla4', icon: 'mdi-account' },
    ],
  }),
}
</script>

<style scoped>

</style>
