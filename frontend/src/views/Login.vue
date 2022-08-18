<template>
    <div>

        <main>
            <login-block></login-block>
        </main>

    </div>
</template>


<script>
    import LoginBlock from "../components/LoginBlock.vue"

    export default {
        name: "LoginView",
        data() {
            return {

            }
        },
        components: {
            "login-block": LoginBlock,
        },
        methods: {

        }
    }
</script>


<style scoped>

</style>