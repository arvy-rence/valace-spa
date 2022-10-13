<template>
    <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-300">
            <table class="min-w-full bg-white">
                <thead class="bg-primary text-white">
                <tr>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">ID</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Name</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Description</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Event Start Date</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Event End Date</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Location</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Image Link</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Actions</th>
                </tr>
                </thead>
                <tbody class="text-black" v-for="(eventData,index) in eventsData" :key="index">
                    <tr>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{eventData.id}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{eventData.event_name}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{eventData.event_description}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{convertToMoment(eventData.event_date_start)}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{convertToMoment(eventData.event_date_end)}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{eventData.event_location}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">
                            <img :src="eventData.event_image_link" class="w-full h-full">
                        </td>
                        <td class="text-center text-2xl">
                            <NuxtLink :to="`/events/${eventData.id}`">
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
import axios from '~/server/index'
import { convertToMoment } from '~/composables/convertToMoment';

export default {
    name: "TableEvents",
    props: {
        eventsData: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped>

</style>