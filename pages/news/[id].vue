<template>
    <form class="w-full max-w-lg m-auto">
        <div class="py-6 font-khula text-2xl text-center font-bold uppercase text-primary">Update News: {{previousNewsName}}</div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-signature"></i> <span class="text-[16px] font-kulim">News Title</span>
                </label>
                <input v-model="newsTitle"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       type="text"
                       placeholder="News">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-lines"></i> <span class="text-[16px] font-kulim">News Description</span>
                </label>
                <textarea v-model="newsDescription"
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
                <input v-model="newsDate"
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
                <input v-model="newsTime"
                       type="time"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       placeholder="Time">
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
                    <i class="fa-solid fa-plus"></i> <span class="text-[16px] font-kulim">Update</span>
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
import axios from '~/server/index'
import uploadImageToAPI from "~/composables/uploadImageToAPI";

export default {
    name: "[id]",
    data() {
        return {
            newsTitle: null,
            newsDescription: null,
            newsDate: null,
            newsTime: null,
            newsImage: null,

            previousNewsName: ""
        }
    },
    methods: {
        async create(e) {
            e.preventDefault()
            const imageResponse = await uploadImageToAPI(this.newsImage)
            const news = {
                newsTitle: this.newsTitle,
                newsDescription: this.newsDescription,
                newsDate: new Date(this.newsDate + " " + this.newsTime),
                newsImageLink: imageResponse
            }
            try {
                await axios.put(`/news/updateNews/${this.$route.params.id}`, news)
                alert("News Successfully Updated")
                this.clearFields()
                this.$router.push('/news')
            } catch (e) {
                console.log("Error")
            }
        },
        clearFields() {
            this.newsTitle = null
            this.newsDescription = null
            this.newsDate = null
            this.newsTime = null
            this.newsImage = null
        },
        discard(e) {
            e.preventDefault()
            this.clearFields()
            this.$router.push('/news')
        },
        async onImageSelect(e) {
            this.newsImage = e.target.files[0]
            console.log(this.newsImage)
        }
    },
    async created() {
        const {data} = await axios.get(`/news/${this.$route.params.id}`)
        this.previousNewsName = data.newsDetails.news_title
    }
}
</script>

<style scoped>

</style>