<template>
    <v-container>
        <v-layout row wrap>

            <v-flex
              v-for="animal in animals"
              :key="animal._id"
              xs4
            >
                <RESTCard :animal="animal" width="200px" height="200px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import RESTCard from './RESTCard.vue'

export default {
    name: "RESTDisplay",
    components: {
        RESTCard
    },
    data() {
        return {
            animals: []
        }
    },
    created() {
        axios
        .get('https://floating-temple-55389.herokuapp.com/animals/all')
        .then((res) => {
            this.animals = res.data
        })
        .catch(error => console.log(error))
    }

}
</script>

<style scoped>

</style>
