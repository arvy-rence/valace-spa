<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <span class="text-4xl font-bold text-primary font-kulim">LOGS</span>
        <TableLogs :logs="logs"/>
        <Loader :isLoading="isLoading"/>
    </div>
</template>

<script>
import axios from '~/server/index'
import { checkReload } from '~/composables/checkReload'

export default {
    name: 'LogsPage',
    data() {
        return {
            logs: []
        }
    },
    async created() {
        const response = await axios.get('/logs')
        this.logs = response.data.logsUTC8
        this.isLoading = false
    },
    mounted() {
        checkReload()
    }
}
</script>