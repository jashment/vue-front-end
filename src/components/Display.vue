<template>
    <v-container>
        <v-layout row wrap>

            <v-flex
              v-for="animal in animals"
              :key="animal._id"
              xs4
            >
                <animalCard :animal="animal" width="200px" height="200px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import gql from 'graphql-tag'
import animalCard from './animalCard.vue'

    export default {
        name: "Display",
        components: {
            animalCard
        },
        data() {
            return {
                info: "",
                animals: []
            }
        },
        mounted() {
            // 
        },
        apollo: {
            animals: gql`query{
                animals {
                    id
                    name
                    description
                    url
                    emotion
                    genus
                }
            }`
        }
    }
</script>

<style>

</style>