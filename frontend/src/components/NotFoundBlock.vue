<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5 text-center">
        <h1>404 Not found</h1>
        <p class="lead text-muted text-uppercase">Nous ne trouvons pas la page Web que vous recherchez.</p>
        <p class="mt-2">Vérifiez que l'URL saisie ne contienne pas d'erreur.</p>
        <button v-on:click="goHome" class="btn btn-warning fw-bold w-100">Retour à l'accueil</button>
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