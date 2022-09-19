<template>

</template>

<script>
import axios from '~/server/index'

export default {
    data() {
        return {
            sisterCities: []
        }
    },
    async created() {
        const response = await axios.get("")
    }
}
</script>