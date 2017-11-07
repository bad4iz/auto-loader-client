<template>
  <v-app
    dark
    id="inspire"
  >
    <v-navigation-drawer
      persistent
      clipped
      enable-resize-watcher
      v-model="drawer"
      app
    >
      <v-list dense>
        eqwerwerq

        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        
       <router-link to="/">Домашняя</router-link>
        <router-link to="admin">Админка</router-link>
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="red" dense fixed clipped-left app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
       
      </v-toolbar-title>
       <v-spacer></v-spacer>

       <v-avatar size="32px" tile>
          <img
            src="../assets/logo.png"
            alt="Vuetify"
          >
        </v-avatar>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          class="white--text"
          hide-details
        ></v-text-field>
      </v-layout>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <main>
      <v-content>
          <v-container fill-height>
            
          <v-layout justify-center align-center>
         <router-view/>
           
          </v-layout>
        </v-container>
      
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>


<style>
.input-group__details:after {
  background-color: rgba(255, 255, 255, 0.32) !important;
}
</style>