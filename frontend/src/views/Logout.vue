<template>
    <div>
        
        <main class="my-5">
            <logged-out-block></logged-out-block>
        </main>
        
    </div>
</template>


<script>
    import LogoutBlock from "../components/LogoutBlock.vue"

    export default {
        name: "LogoutView",
        components: {
            "logged-out-block": LogoutBlock,
        }
    }
</script>


<style scoped>
    
</style>