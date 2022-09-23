<template>
    <form class="w-full max-w-lg m-auto">
        <div class="py-6 font-khula text-2xl text-center font-bold uppercase text-primary">Create Sister City</div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-signature"></i> <span class="text-[16px] font-kulim">City Name</span>
                </label>
                <input v-model="libraryName"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       type="text"
                       placeholder="City Name">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-lines"></i> <span class="text-[16px] font-kulim">City Description</span>
                </label>
                <textarea v-model="libraryDescription"
                          id="comment"
                          rows="4"
                          class="px-0 w-full text-gray-900 bg-gray-200 border border-1 rounded-md border-primary focus:ring-0 p-[.5rem] focus:border-none pl-[.7rem] font-kulim"
                          placeholder="Description">
                </textarea>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold text-lg mb-2"
                       for="grid-first-name">
                    <i class="fa-solid fa-file-signature"></i> <span class="text-[16px] font-kulim">City Address</span>
                </label>
                <input v-model="address"
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:ring-0 p-[.5rem] focus:border-none font-kulim"
                       id="grid-first-name"
                       type="text"
                       placeholder="City Address">
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
                    <i class="fa-solid fa-plus"></i> <span class="text-[16px] font-kulim">Add</span>
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
            libraryName: null,
            address: null,
            image: null,
            libraryDescription: null
        }
    },
    methods: {
        async create(e) {
            e.preventDefault()
            const imageResponse = await uploadImageToAPI(this.image)
            const city = {
                libraryName: this.libraryName,
                libraryDescription: this.libraryDescription,
                address: this.address,
                imageLink: imageResponse
            }
            await axios.post('/sisterCity/createSisterCity', city)
            alert("Sister City Successfully Created")
            this.clearFields()
        },
        clearFields() {
            this.libraryName = null
            this.address = null
            this.image = null
            this.libraryDescription = null        
        },
        discard(e) {
            e.preventDefault()
            this.clearFields()
            this.$router.push('/sister-city')
        },
        async onImageSelect(e) {
            this.image = e.target.files[0]
            console.log(this.image)
        }
    },
}
</script>