<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="font-kulim text-4xl font-bold text-primary py-[2rem]">ADMIN PANEL</h1>
        <div class="flex items-center justify-center gap-8">
            <NuxtLink to="/news">
                <CardCategory>
                    <span class="pt-4 flex justify-center items-center">
                        <i class="fa-regular fa-newspaper text-primary text-8xl"></i>
                    </span>
                    <h1 class="pt-6 pb-2 text-lg text-center font-kulim inline-flex justify-center font-bold">
                        Announcements
                    </h1>
                </CardCategory>
            </NuxtLink>
            <NuxtLink to="/events">
                <CardCategory>
                    <span class="pt-4 flex justify-center items-center">
                        <i class="fa-regular fa-calendar text-primary text-8xl"></i>
                    </span>
                    <h1 class="pt-6 pb-2 text-lg text-center font-kulim inline-flex justify-center font-bold">
                        Events
                    </h1>
                </CardCategory>
            </NuxtLink>
            <NuxtLink to="/sister-city">
                <CardCategory>
                    <span class="pt-4 flex justify-center items-center">
                        <i class="fa-solid fa-book text-primary text-8xl"></i>
                    </span>
                    <h1 class="pt-6 pb-2 text-lg text-center font-kulim inline-flex justify-center font-bold">
                        Sister Libraries
                    </h1>
                </CardCategory>
            </NuxtLink>
            <NuxtLink to="/logs">
                <CardCategory>
                    <span class="pt-4 flex justify-center items-center">
                        <i class="fa-solid fa-gear text-primary text-8xl"></i>
                    </span>
                    <h1 class="pt-6 pb-2 text-lg text-center font-kulim inline-flex justify-center font-bold">
                        Logs
                    </h1>
                </CardCategory>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import CardCategory from "../components/card/CardCategory"
import VerticalSpacer from "../components/VerticalSpacer"
import { checkReload } from '~/composables/checkReload'

export default {
    name: 'IndexPage',
    components: {VerticalSpacer, CardCategory},

    data() {
        return {
        
        }
    },
    created() {

    },
    mounted() {
        checkReload()
    }
}
</script>