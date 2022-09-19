<template>
    <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-300">
            <table class="min-w-full bg-white">
                <thead class="bg-primary text-white">
                <tr>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">ID</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Name</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Description</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Date</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Location</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Image Link</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Actions</th>
                </tr>
                </thead>
                <tbody class="text-black" v-for="(event,index) in events" :key="index">
                    <tr>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{event.id}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{event.event_name}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{event.event_description}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{event.event_date}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{event.event_location}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim overflow-hidden">{{event.event_image_link}}</td>
                        <td class="text-center text-2xl">
                            <NuxtLink :to="`/events/${event.id}`">
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
    name: "TableEvents",
    props: {
        events: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>