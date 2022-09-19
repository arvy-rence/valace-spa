<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <span class="text-4xl font-bold text-primary font-kulim">LOGS</span>
        <LogsTable :logs="logs"/>
    </div>
</template>

<script>
import axios from '~/server/index'

export default {
    name: 'LogsPage',
    data() {
        return {
            logs: []
        }
    },
    async created() {
        const response = await axios.get('/logs')
        console.log(response.data);
        this.logs = response.data.logsUTC8
    }
}
</script>