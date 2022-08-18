<template>
    <div>      

        <main>
            <home-block></home-block>
        </main>

    </div>
</template>


<script>
    import HomeBlock from "../components/HomeBlock.vue"
       
    export default {
        name: "HomeView",
        components: {
            "home-block": HomeBlock,
        }
    }
</script>


<style scoped>
    
</style>