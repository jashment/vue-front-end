<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GraphQL</span>
        <span class="font-weight-light">Front End</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
       <!-- <HelloWorld/>  -->
       <v-btn color="info" @click="toggle()">GraphQL Content</v-btn>
       <v-container v-show="isOpen">
        <apolloAllCall/>
        <apolloOneCall/>
        <apolloConnectCall/>
        <apolloCreateMutation/>
        <apolloDeleteMutation/>
        <apolloUpdateMutation/>
       </v-container>
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
import apolloDeleteMutation from './components/apolloDeleteMutation'
import apolloUpdateMutation from './components/apolloUpdateMutation'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Display,
    apolloAllCall,
    apolloOneCall,
    apolloConnectCall,
    apolloCreateMutation,
    apolloDeleteMutation,
    apolloUpdateMutation
  },
  data () {
    return {
      isOpen: false
    }
  },
  apollo: {
    //
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
