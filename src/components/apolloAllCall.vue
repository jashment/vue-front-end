<template>
  <v-flex>
    <v-container>
      <v-card>
        <h1>View All Animals from GraphQL</h1>
        <v-btn color="info" v-on:click="getAllGraphql(), toggle()">All</v-btn>
        <v-card v-show="isOpen">
          {{myItem.animals}} {{error}}
        </v-card>
      </v-card>
    </v-container>
  </v-flex>
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
            query allAnimals {
              animals {
                name
                description
                id
                emotion
                genus
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