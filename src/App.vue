<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GraphQL and REST</span>
        <span class="font-weight-light">Front End</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
       <!-- <HelloWorld/>  -->
       <div style="text-align: center;">
        <h1 class="animated infinite zoomInDown">Pick One You Would Like To View</h1>
        <br>
        <v-btn color="info" @click="toggle()">GraphQL Content</v-btn>
        <v-btn color="info" @click="toggle2()"> REST Content</v-btn>
       </div>
      <v-expand-transition>
       <v-flex v-show="isOpen" shrink>
        <apolloAllCall/>
        <apolloOneCall/>
        <apolloConnectCall/>
        <apolloCreateMutation/>
        <apolloDeleteMutation/>
        <apolloUpdateMutation/>
        <Display/>
       </v-flex>
      </v-expand-transition>
      <v-expand-transition>
       <v-flex v-show="isOpen2" shrink>
        <RESTCreate/>
        <RESTDelete/>
        <RESTOne/>
        <RESTUpdate/>
        <RESTDisplay/>
       </v-flex>
      </v-expand-transition>
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
import RESTCreate from './views/RESTCreate'
import RESTDisplay from './views/RESTDisplay'
import RESTDelete from './views/RESTDelete'
import RESTOne from './views/RESTOne'
import RESTUpdate from './views/RESTUpdate'

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
    apolloUpdateMutation,
    RESTCreate,
    RESTDisplay,
    RESTDelete,
    RESTOne,
    RESTUpdate
  },
  data () {
    return {
      isOpen: false,
      isOpen2: false
    }
  },
  apollo: {
    //
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen
    },
    toggle2: function() {
      this.isOpen2 = !this.isOpen2
    }
  }
}
</script>
