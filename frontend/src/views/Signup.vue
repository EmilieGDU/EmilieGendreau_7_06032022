<template>
    <div>
        
        <main>
            <signup-block></signup-block>
        </main>

    </div>
</template>


<script>
    import SignupBlock from "../components/SignupBlock.vue"

    export default {
        name: "SignupView",
        data() {
            return {

            }
        },
        components: {
            "signup-block": SignupBlock,
        },
        methods: {

        }
    }
</script>


<style scoped>

</style>