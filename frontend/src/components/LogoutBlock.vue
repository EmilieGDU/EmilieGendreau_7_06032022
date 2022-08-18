<template>
    <div class="container col-12 col-md-9 w-100 text-center">
        <img src="../assets/logged_out_resized_100px.png" class="rounded-2 mb-3" alt="404 Not Found">
        <h1>Déconnexion</h1>
        <p v-html="citation" class="lead fs-4 mt-3"></p>
        <button v-on:click="goHome" class="btn btn-primary fw-bold my-3 w-100">Retour à l'accueil</button>
    </div>
</template>


<script>
    export default {
        name: "LogoutBlock",
        data() {
            return {
                citation: "Vous êtes à présent déconnecté(e). <br /> A bientôt.",
            }
        },
        methods: {
            goHome: function() {
                this.$router.push("/");
            }
        }
    }
</script>


<style scoped>

</style>