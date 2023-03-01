<template>

</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "Test1",
        setup() {
             const items = ref([
                 { id: 1},
                 {id: 2}
             ])
            function handleSubmit(item) {
                items.value.push(item)

            }
            return {
                items,
                handleSubmit,
            }
        }
    }
</script>

<style scoped>

</style>
