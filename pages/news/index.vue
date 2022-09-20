<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <span class="text-4xl font-bold text-primary font-kulim">NEWS AND ANNOUNCEMENTS</span>
    </div>
</template>

<script>
import axios from '~/server/index'
import { checkReload } from '~/composables/checkReload'

export default {
    name: 'NewsPage',
    data() {
        return {
            newsData: []
        }
    },
    async created() {
        const response = await axios.get('/news')
        this.newsData = response.data
    },
    mounted() {
        checkReload()
    }
}
</script>

<style>

</style>