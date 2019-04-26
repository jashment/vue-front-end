<template>
  <div class="about">

        <v-container>
          <v-card>
            <h1>Create An Animal from GraphQL</h1>
            <v-layout row wrap>
            <v-flex xs4>
              <v-text-field v-model="item.name" label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="item.description" label="Description" required></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="item.url" label="URL" required></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="item.emotion" label="Emotion" required></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="item.genus" label="Genus" required></v-text-field>
            </v-flex>
            {{error}}
            {{returnedItem}}
            </v-layout>
            <v-btn @click="submitCreate" color="info">Create</v-btn>
          </v-card>
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    item: {
      name: "",
      description: "",
      url: "",
      emotion: "",
      genus: ""
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
                $emotion: String
                $genus: String
            ) {
                createAnimal(data: {
                    name: $name
                    description: $description
                    url: $url
                    emotion: $emotion
                    genus: $genus
                }) {
                    name
                    description
                    url
                    emotion
                    genus
                }
                }
          `,
          variables: {
            name: this.item.name,
            description: this.item.description,
            url: this.item.url,
            emotion: this.item.emotion,
            genus: this.item.genus
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