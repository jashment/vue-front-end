<template>
    <div>
        <v-container>
          <v-card>
            <h1>Show An Animal</h1>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>
            <v-btn @click="showAnimal">Show One</v-btn>
          </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            animals: []
        }
    },
    props: {
        animal: {
            type: Object,
            required: true
        }
    },
        created () {
            axios
                .get('https://floating-temple-55389.herokuapp.com/animals/' + this.$route.params.id)
                .then((res) => {
                    this.animals = res.data
                })
                .catch(error => console.log(error))
                }
}
</script>

<style scoped>

</style>
