<template>
    <div class="container col-12 col-md-9 w-100 text-center">

        <h1>404 Not found</h1>

        <p class="lead fs-4 mt-3">Nous ne trouvons pas la page Web que vous recherchez.
            <br/>
            <span class="text-muted fs-5">Vérifiez que l'URL saisie ne contienne pas d'erreur.</span>
        </p>
        
        <img src="../assets/404_not_found_resized_300px.png" class="rounded-2 mt-3" alt="404 Not Found">
        
        <button v-on:click="goHome" class="btn btn-primary fw-bold mt-4 w-100">Retour à l'accueil</button>

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