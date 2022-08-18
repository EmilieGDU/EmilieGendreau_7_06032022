<template>
    <div class="container col-12 col-md-9 w-100 text-center">
        <h1 v-html="citation"></h1>
        
        <!-- Adaptative image element -->
        <picture>
            <!-- Source element used to write a media query -->
            <source media="(max-width=768px)" srcset="../assets/community_resized_300px.png" />
            <!-- If no source element is suitable, the file defined by the src attribute of the <img> element will be used -->
            <img src="../assets/community_resized_500px.png" alt="Illustration de collègues de travail" class="rounded-2 mt-3 w-75 h-100" />
        </picture>
    </div>
</template>


<script>
    export default {
        name: "HomeBlock",
        data() {
            return {
                citation: "Bienvenue dans votre communauté d'entreprise.",
            }
        },
    }
</script>


<style scoped>
img {
    object-fit: cover;
}
</style>        