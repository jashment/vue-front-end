<template>
  <div class="about">
    <v-container>
      <v-card>
        <h1>View One Animal from GraphQL</h1>
        <v-text-field v-model="myItem.id" label="ID" required></v-text-field>

        <v-btn color="info" v-on:click="getOneGraphql(), toggle()">One</v-btn>

        <div v-show="isOpen">{{error}} {{myItem}}</div>
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
      myItem: {
        id: "",
        name: "",
        emotion: "",
        genus: ""
      },
      isOpen: false
    };
  },
  methods: {
    getOneGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query oneAnimal (
              $id: ID
            ){
              animal(where: {id: $id}
              ) {
                id
                name
                emotion
                genus
              }
            }
          `,
          variables: {
            id: this.myItem.id,
            name: this.myItem.name,
            emotion: this.myItem.emotion,
            genus: this.myItem.genus
          }
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