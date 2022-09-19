<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <div class="flex flex-row justify-around">
            <h1 class="text-4xl font-bold text-primary font-kulim">
                LIBRARY EVENTS
            </h1>
            <NuxtLink to="events/create">
                <button class="text-white bg-primary px-2 py-2 rounded-md">
                    <i class="fa-solid fa-plus text-white"></i> Add Record
                </button>
            </NuxtLink>
        </div>
        <TableEvents :events="eventsData"/>
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