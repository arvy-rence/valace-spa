<template>
    <Header/>
    <NuxtPage/>
</template>

<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        },
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.png"
        }
    ],
    script: [

    ],
    title: "ValACE SPA",

})
</script>