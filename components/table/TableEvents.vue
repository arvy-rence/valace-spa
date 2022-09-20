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
            <div v-if="isLoading" class="flex justify-center items-center">
                <span class="text-primary text-lg font-kulim font-bold">Loading</span>
                <div class="loader"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '~/server/index'

export default {
    name: "TableEvents",
    data() {
        return {
            isLoading: true,
            events: []
        }
    },
    async created() {
        const response = await axios.get('/events')
        this.events = response.data.eventsUTC8
        this.isLoading = false
    }
}
</script>

<style scoped>
.loader {
	 border: 14px solid #f3f3f3;
	 border-top: 16px solid #00104A;
	 border-radius: 50%;
	 width: 36px;
	 height: 36px;
	 animation: spin 2s linear infinite;
}
 @keyframes spin {
	 0% {
		 transform: rotate(0deg);
	}
	 100% {
		 transform: rotate(360deg);
	}
}
 
</style>