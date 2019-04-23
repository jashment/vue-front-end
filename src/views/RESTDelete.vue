<template>
    <div></div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            animal: {}
        }
    },
    created() {
        axios
        .get('https://floating-temple-55389.herokuapp.com/animals' + this.$route.params.id)
        .then(res => this.animal = res.data)
        .catch(error => console.log(error))
    },
    methods() {
        //
    }
}
</script>

<style scoped>

</style>
