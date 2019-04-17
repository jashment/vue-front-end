<template>
  <div>
    <v-container>
      <v-card>
        <h1>View Animal Connections</h1>
        <v-btn color="info" v-on:click="getAllGraphql(), toggle()">Connections</v-btn>
        <div v-show="isOpen">{{myItem}} {{error}}</div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myItem: {},
      isOpen: false
    };
  },
  methods: {
    getAllGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query animalConnect {
                animalsConnection {
                    edges {
                    node {
                        name
                    }
                    }
                    pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    }
                }
                }
          `
        })
        .then(res => {
          this.myItem = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    },
    toggle: function() {
      this.isOpen = !this.isOpen
    }
  }
};
</script>
<style>
</style>