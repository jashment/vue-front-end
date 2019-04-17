<template>
  <div>
    <v-btn color="info" v-on:click="getAllGraphql() ">All</v-btn>
    <v-card>{{myItem.animals}}</v-card>
    error: {{error}}
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myItem: {}
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
    }
  }
};
</script>
<style>
</style>