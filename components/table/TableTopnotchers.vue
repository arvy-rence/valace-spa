<template>
    <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-300">
            <table class="min-w-full bg-white">
                <thead class="bg-primary text-white">
                <tr>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">ID</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Topnotcher Name</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Topnotcher Title</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Date Posted</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Image</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Actions</th>
                </tr>
                </thead>
                <tbody class="text-black" v-for="(person,index) in topnotchers" :key="index">
                <tr>
                    <td class="w-1/8 text-left py-3 px-4 font-kulim">{{person.id}}</td>
                    <td class="w-1/8 text-left py-3 px-4 font-kulim">{{person.topnotcher_name}}</td>
                    <td class="w-2/8 text-left py-3 px-4 font-kulim">{{person.topnotcher_title}}</td>
                    <td class="w-2/8 text-left py-3 px-4 font-kulim">{{new Date(person.date_uploaded).toLocaleDateString()}}</td>
                    <td class="w-1/8 text-left py-3 px-4 font-kulim">
                        <img :src="person.image_link" class="w-[20rem]">
                    </td>
                    <td class="text-center text-2xl">
                        <NuxtLink :to="`/sister-city/${person.id}`">
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
    name: "TableTopnotchers",
    props: {
        topnotchers: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>