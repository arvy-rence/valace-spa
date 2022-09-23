<template>
    <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-300">
            <table class="min-w-full bg-white">
                <thead class="bg-primary text-white">
                <tr>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">ID</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">News Title</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">News Description</th>
                    <th class="w-2/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Date</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Image Link</th>
                    <th class="w-1/8 text-left py-3 px-4 uppercase font-bold text-sm font-khula">Actions</th>
                </tr>
                </thead>
                <tbody class="text-black" v-for="(news,index) in newsData" :key="index">
                    <tr>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{news.id}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">{{news.news_title}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{news.news_description}}</td>
                        <td class="w-2/8 text-left py-3 px-4 font-kulim">{{convertToMoment(news.news_date)}}</td>
                        <td class="w-1/8 text-left py-3 px-4 font-kulim">
                            <img :src="news.news_image_link" class="w-full h-full">
                        </td>
                        <td class="text-center text-2xl">
                            <NuxtLink :to="`/news/${news.id}`">
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
import { convertToMoment } from '~/composables/convertToMoment';
export default {
    name: "TableNews",
    props: {
        newsData: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped>

</style>