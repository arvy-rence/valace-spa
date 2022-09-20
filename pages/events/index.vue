<template>
    <div class="pt-6 flex flex-col justify-center items-center">
        <div class="flex flex-row justify-around">
            <h1 class="text-4xl font-bold text-primary font-kulim">
                LIBRARY EVENTS
            </h1>
            <div>
                <NuxtLink to="events/create">
                    <button class="text-white bg-primary px-2 py-2 rounded-md">
                        <i class="fa-solid fa-plus text-white"></i> Add Record
                    </button>
                </NuxtLink>
            </div>
        </div>
        <TableEvents/>
    </div>
</template>

<script>
import axios from '~/server/index'
import { checkReload } from '~/composables/checkReload'

export default {
    name: 'EventsPage',
    data() {
        return {
            eventsData: []
        }
    },
    mounted() {
        checkReload()
    }
}
</script>

<style>

</style>