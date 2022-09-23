<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <PageHeader pageName="LIBRARY EVENTS" slug="events"/>
        <TableEvents :eventsData="eventsData"/>
        <Loader :isLoading="isLoading"/>
    </div>
</template>

<script>
import axios from '~/server/index'
import {checkReload} from '~/composables/checkReload'
import PageHeader from "../../components/PageHeader";

export default {
    name: 'EventsPage',
    components: {PageHeader},
    data() {
        return {
            isLoading: true,
            eventsData: []
        }
    },
    async created() {
        const response = await axios.get('/events')
        this.eventsData = response.data.eventsUTC8
        this.isLoading = false
    },
    mounted() {
        checkReload()
    }
}
</script>

