<template>
  <div>
    <v-btn color="info" v-on:click="getAllGraphql()">Connections</v-btn>
    {{myItem}}
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
    }
  }
};
</script>
<style>
</style>