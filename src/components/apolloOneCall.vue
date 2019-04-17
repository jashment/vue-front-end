<template>
  <div class="about">
    <v-container>
        <v-text-field v-model="myItem.id" label="ID" required></v-text-field>
      <v-btn color="info" v-on:click="getOneGraphql(), toggle()">One</v-btn>
          <div v-show="isOpen">{{error}}
      {{myItem}}</div>
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
        id: String,
        name: String,
        emotion: String
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
              }
            }
          `,
          variables: {
            id: this.myItem.id,
            name: this.myItem.name,
            emotion: this.myItem.emotion
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