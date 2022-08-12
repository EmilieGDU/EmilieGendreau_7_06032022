<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-3 text-center">
        <h1 v-html="citation"></h1>
        <img src="../assets/community_resized_300px.png" class="rounded-2 mt-3" alt="Illustration de collègues de travail">
    </div>
</template>


<script>
    export default {
        name: "HomeBlock",
        data() {
            return {
                citation: "Bienvenue dans votre communauté d'entreprise."
            }
        },
    }
</script>


<style scoped>
img {
    object-fit: cover;
}
</style>        