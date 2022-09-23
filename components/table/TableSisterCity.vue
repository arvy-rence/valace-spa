<template>
    <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-300">
            <table class="min-w-full bg-white">
                <thead class="bg-primary text-white">
                <tr>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">ID</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">City Name</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Description</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Address</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Image</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Actions</th>
                </tr>
                </thead>
                <tbody class="text-black" v-for="(cityData,index) in sisterCities" :key="index">
                <tr>
                    <td class="w-1/8 text-left py-3 px-4 font-kulim">{{cityData.id}}</td>
                    <td class="w-1/8 text-left py-3 px-4 font-kulim">{{cityData.library_name}}</td>
                    <td class="w-2/8 text-left py-3 px-4 font-kulim">{{cityData.library_description}}</td>
                    <td class="w-2/8 text-left py-3 px-4 font-kulim">{{cityData.address}}</td>
                    <td class="w-1/8 text-left py-3 px-4 font-kulim">
                        <img :src="cityData.image_link" class="w-full h-full">
                    </td>
                    <td class="text-center text-2xl">
                        <NuxtLink :to="`/sister-city/${cityData.id}`">
                            <i class="fa-solid fa-pen-to-square text-primary"></i>
                        </NuxtLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "TableSisterCity",
    props: {
        sisterCities: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>