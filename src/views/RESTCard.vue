<template>
    <v-card flat tile style="padding-left:5px; padding-right: 5px">
        <v-img :src="animal.url" height="400px" class="white--text" style="text-align: center; text-shadow: 2px 2px 4px #000000;">
            <h3 class="headline mb-0">{{animal.name}}</h3>
        </v-img>
        <v-card-title primary-title>
            <div >
                <h3 class="headline mb-0">{{animal.name}}</h3>
                <ul>
                    <li>ID: {{animal.id}}</li>
                    <li>Emotion: {{animal.emotion}}</li>
                    <li>Description: {{animal.description}}</li>
                    <li>Genus: {{animal.genus}}</li>
                </ul>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            //
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
