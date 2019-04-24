<template>
    <div>
        <v-container>
          <v-card>
            <h1>Delete An Animal</h1>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
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
            // id: this.$route.params.id,
            // animal: {

            // }
        }
    },
    created() {
        // axios
        // .get('https://floating-temple-55389.herokuapp.com/animals' + this.$route.params.id)
        // .then((res) => {
        //     this.animal = res.data
        //     })
    },
    methods: {
        deleteAnimal () {
            axios
            .delete('https://floating-temple-55389.herokuapp.com/animals/' + this.$route.params.id + '/delete')
            .then((res) => {
                alert('Animal Deleted!')
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
