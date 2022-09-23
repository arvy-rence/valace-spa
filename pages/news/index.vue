<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <PageHeader pageName="NEWS AND ANNOUNCEMENTS" slug="news"/>
        <TableNews :newsData="newsData"/>
        <Loader :isLoading="isLoading"/>
        <span class="text-center font-kulim font-bold text-xl text-primary" v-if="isEmpty">No news found in database</span>
    </div>
</template>

<script>
import axios from '~/server/index'
import { checkReload } from '~/composables/checkReload'

export default {
    name: 'NewsPage',
    data() {
        return {
            newsData: [],
            isEmpty: false,
            isLoading: true
        }
    },
    async created() {
        const response = await axios.get('/news')
        this.newsData = response.data.newsUTC8
        this.checkIfEmpty()
    },
    mounted() {
        checkReload()
    },
    methods: {
        checkIfEmpty() {
            if (this.newsData.length === 0) {
                this.isLoading = false
                this.isEmpty = true
            }
        }
    }
}
</script>

<style>

</style>