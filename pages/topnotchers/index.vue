<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <PageHeader pageName="TOPNOTCHERS SHELF RECORDS" slug="topnotchers"/>
<!--        <TableNews :newsData="newsData"/>-->
        <TableTopnotchers :topnotchers="topnotchersData"/>
        <Loader :isLoading="isLoading"/>
        <span class="text-center font-kulim font-bold text-xl text-primary" v-if="isEmpty">No topnotchers found in database</span>
    </div>
</template>

<script>
import axios from '~/server/index'
import { checkReload } from '~/composables/checkReload'

export default {
    name: "index",
    data() {
        return {
            topnotchersData: [],
            isEmpty: false,
            isLoading: true
        }
    },
    async created() {
        const {data} = await axios.get('topnotchers')
        this.topnotchersData = data.topnotchersDetail
        this.checkIfEmpty()
    },
    mounted() {
        checkReload()
    },
    methods: {
        checkIfEmpty() {
            if (this.topnotchersData.length === 0) {
                this.isLoading = false
                this.isEmpty = true
            } else {
                this.isLoading = false
            }
        }
    }
}
</script>

<style scoped>

</style>