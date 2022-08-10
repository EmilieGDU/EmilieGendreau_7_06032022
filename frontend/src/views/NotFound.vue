<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5 text-center">
        <h1 class="fw-bold">NOT FOUND</h1>
        <p class="lead fs-4 mt-5">Nous ne trouvons pas la page Web que vous recherchez.</p>
        <p class="text-muted fs-5 mt-2">Vérifiez que l'URL saisie ne contienne pas d'erreur.</p>
        <button v-on:click="goHome" class="btn btn-warning fw-bold mt-5 w-100">Retour à l'accueil</button>
    </div>
</template>


<script>
    export default {
        name: "NotFoundView",
        data() {
            return {

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