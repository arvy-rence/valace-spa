<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <PageHeader pageName="SISTER CITIES" slug="/sister-city"/>
        <TableSisterCity :sisterCities="sisterCityData"/>
        <Loader :isLoading="isLoading"/>
    </div>
</template>

<script>
import axios from '~/server/index'
import { checkReload } from '~/composables/checkReload'
import TableSisterCity from "~/components/table/TableSisterCity";

export default {
    name: 'SisterCityPage',
    components: {TableSisterCity},

    data() {
        return {
            sisterCityData: [],
            isLoading: true,
        }
    },
    async created() {
        const response = await axios.get('/sisterCity')
        this.sisterCityData = response.data.sisterCities
        this.isLoading = false
    },
    mounted() {
        checkReload()
    }
}
</script>