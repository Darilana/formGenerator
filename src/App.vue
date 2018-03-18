<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped"  dark color="primary">
        <a href="/" fab dark icon><v-icon>create</v-icon></a>
      <v-toolbar-title v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout row>
            <v-flex xs4 offset-xs4>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-flex xs12 py-3 text-xs-center>
        &copy;2018 — All rights reserved
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        fixed: false,
        title: 'Form generator'
      }
    }
  }
</script>
