<template>
    <div>
        
        <main class="mt-4 mb-5">
            <not-found></not-found>
        </main>

    </div>
</template>


<script>
    import NotFoundBlock from "../components/NotFoundBlock.vue"

    export default {
        name: "NotFoundView",
        components: {
            "not-found": NotFoundBlock,
        }
    }
</script>


<style scoped>

</style>