<template>
      <div class="about">
        <v-container>
          <v-card>
            <h1>Update An Animal from REST</h1>
            <v-layout row wrap>
            <v-flex xs6>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field v-model="description" label="Description" required></v-text-field>
            </v-flex>
            </v-layout>
            <v-btn @click="updateAnimal" color="info">Update</v-btn>
            <!-- {{error}}
            {{returnedItem}} -->
          </v-card>
        </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: this.$route.params.id,
            description: this.description,
            animal: {

            }
        }
    },
    created() {
        axios
        .get('https://floating-temple-55389.herokuapp.com/animals/all')
        .then((res) => {
            this.animal = res.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    props: {
        //
    },
    methods: {
        updateAnimal() {
            const animalData = {
                id: this.id,
                description: this.description
            }
            console.log(animalData)
            axios
            .put('https://floating-temple-55389.herokuapp.com/animals/' + this.id + '/update', animalData)
            .then((res) => {
                alert('Animal Updated! Refresh to view' + animalData)
                this.$router.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>
