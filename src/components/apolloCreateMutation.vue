<template>
  <div class="about">
      {{error}}
      {{returnedItem}}
        <v-container>
          <v-flex xs12>
            <v-text-field v-model="item.name" label="Name" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="item.description" label="Description" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="item.url" label="URL" required></v-text-field>
          </v-flex>
      <v-btn @click="submitCreate()">Create</v-btn>
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    item: {
      name: String,
      description: String,
      url: String
    },
    returnedItem: {}
  }),
  methods: {
    submitCreate: function() {
      this.$apollo.mutate({
          mutation: gql`
            mutation createAnimal(
                $name: String
                $description: String
                $url: String
            ) {
                createAnimal(data: {
                    name: $name
                    description: $description
                    url: $url
                }) {
                    name
                    description
                    url
                }
                }
          `,
          variables: {
            name: this.item.name,
            description: this.item.description,
            url: this.item.url
          }
        })
        .then(res => {
          this.returnedItem = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>