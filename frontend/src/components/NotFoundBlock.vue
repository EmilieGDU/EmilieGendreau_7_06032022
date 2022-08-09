<template>
    <div class="text-center my-5">
        <h1>Page non trouvée</h1>
        <p class="lead text-muted text-uppercase">Sans détour, il n'y a point de voyage.</p>
        <button v-on:click="goHome" class="btn btn-warning">Revenir à l'accueil</button>
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