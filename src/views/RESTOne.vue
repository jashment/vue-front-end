<template>
    <div>
        <v-container>
          <v-card>
            <h1>Show An Animal from REST</h1>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>
            <v-btn @click="getOne(), toggle()" color="info">Show One</v-btn>
            <v-card v-show="isOpen" style="margin:auto; text-align:center;">
                <v-img :src="animals.url" width="200px" height="200px" style="margin:auto;"></v-img>
                {{animals.name}}
            </v-card>
          </v-card>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            animals: {
                id: "",
                name: "",
                emotion: "",
                genus: ""
            },
            id: this.$route.params.id,
            isOpen: false
        }
    },
    props: {
        //
    },
        created () {
            axios
                .get('https://floating-temple-55389.herokuapp.com/animals/all')
                .then((res) => {
                    this.animals = res.data
                })
                .catch(error => console.log(error))
                },
        methods: {
            getOne() {
                axios
                .get('https://floating-temple-55389.herokuapp.com/animals/' + this.id)
                .then((res) => {
                    this.animals = res.data
                    console.log(res)
                })
                .catch(error => console.log(error))
            },
            toggle: function() {
                this.isOpen = !this.isOpen
            }
        }
}
</script>

<style scoped>

</style>
