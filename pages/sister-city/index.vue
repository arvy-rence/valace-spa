<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <span class="text-4xl font-bold text-primary font-kulim">SISTER CITIES</span>
        <div v-for="(city, index) in sisterCityData" :key="index">
            image: {{ city.image }} 
            city: {{ city.name }} <br>
            description: {{city.description}} <br>
            address: {{city.address}}
        </div>
    </div>
</template>

<script>
import axios from '~/server/index'

export default {
    name: 'SisterCityPage',
    data() {
        return {
            sisterCityData: []
        }
    },
    async created() {
        const response = await axios.get('/sisterCity')

        const data = response.data.sisterCities

        data.forEach((sisterCity) => {
            this.sisterCityData.push({
                name: sisterCity.library_name,
                description: sisterCity.library_description,
                image: sisterCity.image_link,
                address: sisterCity.address,
                link: `sister-city/${sisterCity.id}`
            })
        });

        console.log(this.sisterCityData)
    }
}
</script>