<template>
    <v-container>
        <v-layout row wrap>
            <!--<v-card>
                <v-img :src="`https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`" />
                    <v-card-title>
                        <h2>Animal Name</h2>
                        <p>Description</p>
                        <p>Other Description</p>
                    </v-card-title>
            </v-card>-->

            <v-flex
              v-for="animal in animals"
              :key="animal.name"
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
                    name
                    description
                    url
                    emotion
                }
            }`,
        }
    }
</script>

<style>

</style>