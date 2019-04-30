<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GraphQL and REST</span>
        <span class="font-weight-light">Front End</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="info" @click="toggle()">GraphQL Content</v-btn>
        <v-btn color="info" @click="toggle2()"> REST Content</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
       <!-- <HelloWorld/>  -->
       <v-card style="text-align: center;">
        <h1 class="animated zoomInDown">Pick One You Would Like To View</h1>
        <br>
        <h1 class="headline mb-0">GraphQL and RESTful Zoo</h1>
        <v-img src="https://images.pexels.com/photos/797582/pexels-photo-797582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" style="height: 550px;" position="100% 20%"></v-img>

       </v-card>
      <v-expand-transition>
       <v-flex v-show="isOpen" shrink>
         <div style="text-align: center;">
          <v-btn class="animated infinite pulse" color="info" @click="toggle3()">View All Animals</v-btn>
         </div>
          <div class="animated slideInDown slow" v-show="isOpen3">
            <Display/>
          </div>
         
        <apolloAllCall/>
        <apolloOneCall/>
        <apolloConnectCall/>
        <apolloCreateMutation/>
        <apolloDeleteMutation/>
        <apolloUpdateMutation/>
       </v-flex>
      </v-expand-transition>
      <v-expand-transition>
       <v-flex v-show="isOpen2" shrink>
         <div style="text-align: center;">
          <v-btn class="animated infinite pulse" color="info" @click="toggle4()">View All Animals</v-btn>
          </div>
          <div class="animated slideInDown slow" v-show="isOpen4">
            <RESTDisplay/>
          </div>
        <RESTCreate/>
        <RESTDelete/>
        <RESTOne/>
        <RESTUpdate/>
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
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
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
    },
    toggle3: function() {
      this.isOpen3 = !this.isOpen3
    },
    toggle4: function() {
      this.isOpen4 = !this.isOpen4
    }
  }
}
</script>
