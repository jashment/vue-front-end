<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
       <!-- <HelloWorld/>  -->
       <apolloAllCall/>
       <apolloOneCall/>
       <apolloConnectCall/>
       <apolloCreateMutation/>
       <Display/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Display from './components/Display'
import apolloAllCall from './components/apolloAllCall'
import apolloOneCall from './components/apolloOneCall'
import apolloConnectCall from './components/apolloConnectCall'
import apolloCreateMutation from './components/apolloCreateMutation'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Display,
    apolloAllCall,
    apolloOneCall,
    apolloConnectCall,
    apolloCreateMutation
  },
  data () {
    return {
      //
    }
  },
  apollo: {
    //
  }
}
</script>
