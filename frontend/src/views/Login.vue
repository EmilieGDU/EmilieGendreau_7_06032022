<template>
    <div>

        <main class="my-3">
            <login-block></login-block>
        </main>

    </div>
</template>


<script>
    import LoginBlock from "../components/LoginBlock.vue"

    export default {
        name: "LoginView",
        components: {
            "login-block": LoginBlock,
        }
    }
</script>


<style scoped>

</style>