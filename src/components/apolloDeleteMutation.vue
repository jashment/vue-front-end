<template>
  <div class="about">
        <v-container>
          <v-card>
            <h1>Delete An Animal</h1>
            <v-flex xs12>
              <v-text-field v-model="item.id" label="ID" required></v-text-field>
            </v-flex>
            <v-btn @click="submitDelete()">Delete</v-btn>
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
        name: ""
    },
    returnedItem: {}
  }),
  methods: {
    submitDelete: function() {
      this.$apollo.mutate({
          mutation: gql`
                mutation deleteAnimal(
                    $id: ID
                ) {
                    deleteAnimal (
                        where: {id: $id }) 
                    {
                        id
                        name
                    }
                    }
          `,
          variables: {
            id: this.item.id,
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