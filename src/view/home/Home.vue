<template>
    <h1>руддщ</h1>
    <button @click="oSubmit">click</button>
<div v-for="item in items">
    {{item.name}}
</div>
    {{sorteredItems}}
</template>

<script>
    import {ref, computed} from 'vue'
    export default {
        name: "Home",
        setup(props, contex) {
            const items = ref([
                {
                    id: 1,
                name: 'ssas'
                },
                {
                    id: 2,
                    name: '1212'
                }
            ])
            const oSubmit = ()=> {
                contex.emit('onSubmit', 1)
            }
            const sorteredItems = computed(()=>{
return 2
            })
            function handleSubmit(item) {
                items.value.push(item)

            }
            return {
                items,
                handleSubmit,
                oSubmit,
                sorteredItems
            }
        }
    }
</script>

<style scoped>

</style>
