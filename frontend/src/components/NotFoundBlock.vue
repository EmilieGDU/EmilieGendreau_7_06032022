<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5 text-center">
        <h1>404 Not found</h1>
        <p class="lead fs-4 mt-5">Nous ne trouvons pas la page Web que vous recherchez.</p>
        <p class="text-muted fs-5 mt-2">Vérifiez que l'URL saisie ne contienne pas d'erreur.</p>
        <img src="../assets/404_not_found_resized.png" class="rounded-2" alt="404 Not Found">
        <button v-on:click="goHome" class="btn btn-primary fw-bold mt-5 w-100">Retour à l'accueil</button>
    </div>
</template>


<script>
    export default {
        name: "NotFound",
        methods: {
            goHome: function() {
                this.$router.push("/");
            }
        }
    }
</script>


<style scoped>

</style>