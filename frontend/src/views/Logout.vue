<template>
    <div>
        <h1>LOGOUT</h1>
        <!-- <p>{{ citation }}</p> -->
        <p v-html="citation"></p>
        <button v-on:click="goHome" type="button" class="btn btn-primary fw-bold my-3 w-100">Retour à l'accueil</button>
    </div>
</template>


<script>
    export default {
        name: "LogoutView",
        data() {
            return {
                citation: "Vous êtes à présent déconnecté(e). <br /> A bientôt.",
            }
        },
        components: {
            // "header-block": ,
            // "footer-block":
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