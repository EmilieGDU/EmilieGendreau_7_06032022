<template>
    <div>
        <header-logged-out></header-logged-out>

        <logged-out-block></logged-out-block>
        
        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderLoggedOut from "../components/HeaderLoggedOut.vue"
    import LogoutBlock from "../components/LogoutBlock.vue"
    import FooterBlock from "../components/FooterBlock.vue"

    export default {
        name: "LogoutView",
        components: {
            "header-logged-out": HeaderLoggedOut,
            "logged-out-block": LogoutBlock,
            "footer-block": FooterBlock,
        }
    }
</script>


<style scoped>

</style>