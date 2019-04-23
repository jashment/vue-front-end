<template>
    <div>
        <v-container>
          <v-card>
            <h1>Delete An Animal</h1>
            <v-flex xs12>
              <v-text-field v-model="_id" label="ID" required></v-text-field>
            </v-flex>
            <v-btn @click="deleteAnimal">Delete</v-btn>
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
    created() {
        // axios
        // .get('https://floating-temple-55389.herokuapp.com/animals' + this.$route.params.id + '/delete')
        // .then(res => this.animal = res.data)
        // .catch(error => console.log(error))
    },
    methods: {
        deleteAnimal () {
            const animalData = {
                name: this.name,
                description: this.description,
                url: this.url,
                emotion: this.emotion,
                genus: this.genus
            }
            console.log(animalData)
            axios
            .post('https://floating-temple-55389.herokuapp.com/animals' + this.$route.params.id + '/delete', animalData)
            .then((res) => {
                alert('Animal Deleted!')
                this.$router.push('/')
            })
            .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>

</style>
