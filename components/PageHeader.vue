<template>
    <div class="flex flex-row justify-around">
        <h1 class="text-4xl font-bold text-primary font-kulim pr-[5rem]">
            {{ pageName }}
        </h1>
        <div>
            <NuxtLink :to="`${slug}/create`">
                <button class="text-white bg-primary px-2 py-2 text-lg rounded-md font-kulim uppercase">
                    <i class="fa-solid fa-plus text-white"></i> Add Record
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        pageName: {
            type: String,
            default: 'Page Name'
        },
        slug: {
            type: String,
            required: true,
            default: ""
        }
    }
}
</script>
