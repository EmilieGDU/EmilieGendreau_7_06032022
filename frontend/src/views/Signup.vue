<template>
    <div>
        
        <main class="my-3">
            <signup-block></signup-block>
        </main>

    </div>
</template>


<script>
    import SignupBlock from "../components/SignupBlock.vue"

    export default {
        name: "SignupView",
        components: {
            "signup-block": SignupBlock,
        }
    }
</script>


<style scoped>

</style>