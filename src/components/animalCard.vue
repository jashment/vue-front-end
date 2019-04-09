<template>
    <v-card flat tile style="padding-left:5px; padding-right: 5px">
        <v-img :src="animal.url" height="400px" class="white--text" style="text-align: center; text-shadow: 2px 2px 4px #000000;">
            <h3 class="headline mb-0">{{animal.name}}</h3>
        </v-img>
        <v-card-title primary-title>
            <div >
                <h3 class="headline mb-0">{{animal.name}}</h3>
                <ul>
                    <li>{{animal.description}}</li>
                </ul>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: {
        animal: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>