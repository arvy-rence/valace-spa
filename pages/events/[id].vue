<template>
    <form class="w-full max-w-lg m-auto">
        <div class="py-6 font-khula text-2xl text-center font-bold uppercase text-primary">
            Update Event: {{previousEventName}}
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-signature"></i> <span class="text-[16px] font-kulim">Event Name</span>
                </label>
                <input v-model="eventName"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       type="text"
                       placeholder="Event">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-lines"></i> <span class="text-[16px] font-kulim">Event Description</span>
                </label>
                <textarea v-model="eventDescription"
                          id="comment"
                          rows="4"
                          class="px-0 w-full text-gray-900 bg-gray-200 border border-1 rounded-md border-primary focus:ring-0 p-[.5rem] focus:border-none pl-[.7rem] font-kulim"
                          placeholder="Description">
                </textarea>
            </div>
        </div>
        <div class="flex flex-row items-center w-100 gap-3 mb-6">
            <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-calendar-alt"></i> <span class="text-[16px] font-kulim">Date</span>
                </label>
                <input v-model="eventDate"
                       type="date"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       placeholder="Date">
            </div>
            <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-clock"></i> <span class="text-[16px] font-kulim">Time</span>
                </label>
                <input v-model="eventTime"
                       type="time"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       placeholder="Time">
            </div>
            <div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-map-marker-alt"></i> <span class="text-[16px] font-kulim">Location</span>
                </label>
                <input v-model="eventLocation"
                       type="text"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       placeholder="Location">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lgmb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-image"></i> <span class="text-[16px] font-kulim">Image</span>
                </label>
                <input @change="onImageSelect"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       type="file"
                       accept="image/*">
            </div>
        </div>
        <div class="flex flex-row items-center w-100 gap-3 mb-6">
            <div>
                <button @click="create"
                        class="w-full bg-primary hover:bg-[#000B32] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase">
                    <i class="fa-solid fa-plus"></i> <span class="text-[16px] font-kulim">UPDATE</span>
                </button>
            </div>
            <div>
                <button @click="discard"
                        class="w-full bg-secondary hover:bg-[#B60808] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase">
                    <i class="fa-solid fa-trash"></i> <span class="text-[16px] font-kulim">Discard</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import uploadImageToAPI from "../../composables/uploadImageToAPI";
import axios from '~/server/index'

export default {
    name: "CreateEventForm",
    data() {
        return {
            eventName: null,
            eventDescription: null,
            eventDate: null,
            eventTime: null,
            eventLocation: null,
            eventImage: null,

            previousEventName: "",
        }
    },
    methods: {
        async create(e) {
            e.preventDefault()
            const imageResponse = await uploadImageToAPI(this.eventImage)
            const event = {
                eventName: this.eventName,
                eventDescription: this.eventDescription,
                eventDate: new Date(this.eventDate + " " + this.eventTime),
                eventLocation: this.eventLocation,
                eventImageLink: imageResponse
            }
            try {
                await axios.put(`/events/updateEvent/${this.$route.params.id}`, event)
                alert("Event Successfully Updated")
                this.$router.push("/events")
            } catch (e) {
                alert("Error Updating Event")
            }
        },
        clearFields() {
            this.eventName = null
            this.eventDescription = null
            this.eventDate = null
            this.eventTime = null
            this.eventLocation = null
            this.eventImage = null
        },
        discard(e) {
            e.preventDefault()
            this.clearFields()
            this.$router.push('/events')
        },
        async onImageSelect(e) {
            this.eventImage = e.target.files[0]
            console.log(this.eventImage)
        }
    },
    async created() {
        const {data} = await axios.get(`/events/${this.$route.params.id}`)
        this.previousEventName = data.eventDetails.event_name
    }
}
</script>