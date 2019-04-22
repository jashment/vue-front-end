<template>
  <div class="about">
        <v-container>
          <v-card>
            <h1>Update An Animal Data</h1>
            <v-flex xs12>
              <v-text-field v-model="item.id" label="id" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="item.description" label="Description" required></v-text-field>
            </v-flex>
            <v-btn @click="submitUpdate()">Update</v-btn>
            {{error}}
            {{returnedItem}}
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
        id: "",
        description: "",
        name: ""
    },
    returnedItem: {}
  }),
  methods: {
    submitUpdate: function() {
      this.$apollo.mutate({
          mutation: gql`
                mutation updateAnimal(
                    $id: ID
                    $description: String
                ) {
                    updateAnimal(
                    data:{description: $description}
                    where:{id: $id}
                ) {
                    id
                    description
                    name
                }
                }
          `,
          variables: {
            id: this.item.id,
            description: this.item.description,
            name: this.item.name
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