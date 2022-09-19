<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <span class="text-4xl font-bold text-primary font-kulim">LIBRARY EVENTS</span>
        
    </div>
</template>

<script>
import axios from '~/server/index'

export default {
    name: 'EventsPage',
    data() {
        return {
            eventsData: []
        }
    },
    async created() {
        const response = await axios.get('/events')
        this.eventsData = response.data.eventsUTC8
    }
}
</script>

<style>

</style>