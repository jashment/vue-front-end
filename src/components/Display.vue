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

            <animalCard v-for="animal in animals"
            :key="animal.name"
            :animal="animal"
            />

            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
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
                }
            }`,
        }
    }
</script>

<style>

</style>