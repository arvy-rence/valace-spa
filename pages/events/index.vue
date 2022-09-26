<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <PageHeader pageName="LIBRARY EVENTS" slug="events"/>
        <TableEvents :eventsData="eventsData"/>
        <Loader :isLoading="isLoading"/>
        <span class="text-center font-kulim font-bold text-xl text-primary" v-if="isEmpty">No news found in database</span>
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
            isEmpty: false,
            eventsData: []
        }
    },
    async created() {
        const response = await axios.get('/events')
        this.eventsData = response.data.eventsUTC8
        this.checkIfEmpty()
        this.isLoading = false
    },
    methods: {
        checkIfEmpty() {
            if (this.eventsData.length === 0) {
                this.isLoading = false
                this.isEmpty = true
            } else {
                this.isLoading = false
            }
        }
    },
    mounted() {
        checkReload()
    }
}
</script>

