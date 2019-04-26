<template>
    <div>
        <v-container>
          <v-card>
            <h1>Create An Animal from REST</h1>
            <v-flex xs12>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="description" label="Description" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="url" label="URL" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="emotion" label="Emotion" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="genus" label="Genus" required></v-text-field>
            </v-flex>
            <v-btn @click="createAnimal">Create</v-btn>
          </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: "",
            description: "",
            url: "",
            emotion: "",
            genus: ""
        }
    },
    methods: {
        createAnimal () {
            const animalData = {
                name: this.name,
                description: this.description,
                url: this.url,
                emotion: this.emotion,
                genus: this.genus
            }
            console.log(animalData)
            axios
            .post('https://floating-temple-55389.herokuapp.com/animals/create', animalData)
            .then((res) => {
                alert('Animal Created!')
                this.$router.push('/')
            })
            .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>

</style>
