<template>
    <div :style="spacerStyle"/>
</template>

<script>
export default {
    name: "VerticalSpacer",
    props: {
        height: {
            type: Number,
            default: 10
        },
        units: {
            type: String,
            default: "px"
        }
    },
    computed: {
        spacerStyle() {
            return {
                height: this.height + this.units
            }
        }
    }
}
</script>

<style scoped>

</style>