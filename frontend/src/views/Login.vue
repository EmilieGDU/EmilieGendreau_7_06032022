<template>
    <div>
        <h1>LOGIN</h1>
        <p class="text-muted">Page Login commune aux utilisateurs et à l'administrateur. Faire varier la citation suivant statut admin ou pas.</p>  
         
        <header-not-logged></header-not-logged>

        <main>
            <login-block></login-block>
        </main>

        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderNotLogged from "../components/HeaderNotLogged.vue"
    import LoginBlock from "../components/LoginBlock.vue"
    import FooterBlock from "../components/FooterBlock.vue"

    export default {
        name: "LoginView",
        data() {
            return {

            }
        },
        components: {
            "header-not-logged": HeaderNotLogged,
            "login-block": LoginBlock,
            "footer-block": FooterBlock,
        },
        methods: {

        }
    }
</script>


<style scoped>

</style>