<template>
    <div>
        <header-not-logged></header-not-logged>
        
        <main>
            <signup-block></signup-block>
        </main>

        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderNotLogged from "../components/HeaderNotLogged.vue"
    import SignupBlock from "../components/SignupBlock.vue"
    import FooterBlock from "../components/FooterBlock.vue"

    export default {
        name: "SignupView",
        data() {
            return {

            }
        },
        components: {
            "header-not-logged": HeaderNotLogged,
            "signup-block": SignupBlock,
            "footer-block": FooterBlock,
        },
        methods: {

        }
    }
</script>


<style scoped>

</style>