<template>
    <div>
        
        <main>
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