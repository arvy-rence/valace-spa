<template>
    <form class="w-full max-w-lg m-auto">

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                <i class="fa-solid fa-file-signature"></i> Event Name
            </label>
            <input v-model="eventName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Event">
          </div>
        </div>
        <span>{{eventName}}</span>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                <i class="fa-solid fa-file-lines"></i> Event Description
              </label>
             <textarea id="comment" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border border-1 rounded-md border-primary dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 p-[.5rem] pl-[.7rem]" placeholder="Description"></textarea>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            <i class="fa-solid fa-calendar"></i> Event Date
          </label>
          <input type="date" class="w-full border border-1 border-primary rounded-md h-[3rem] pl-[.7rem]"/>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    <i class="fa-solid fa-location-dot"></i> Event Location
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Location">
            </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    <i class="fa-solid fa-image"></i> Image Link
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Image">
            </div>
        </div>
    </form>
</template>

<script>
  export default {
    data() {
      return {
        eventName: '',
      }
    }
  } 
</script>