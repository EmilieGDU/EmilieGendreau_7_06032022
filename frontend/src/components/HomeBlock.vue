<template>
    <div class="container col-12 col-md-9 w-100 text-center">
        <h1 v-html="citation"></h1>
        <img v-if="window.width <= 768" src="../assets/community_resized_300px.png" class="rounded-2 mt-3" alt="Illustration de collègues de travail">
        <img v-else src="../assets/community_resized_500px.png" class="rounded-2 mt-3" alt="Illustration de collègues de travail">
    </div>
</template>


<script>
    export default {
        name: "HomeBlock",
        data() {
            return {
                citation: "Bienvenue dans votre communauté d'entreprise.",
                window: {
                    width: 0,
                    height: 0
                },
            }
        },
        created() {
            window.addEventListener("resize", this.handleResize);
            this.handleResize();
        },
        unmounted() {
            window.removeEventListener("resize", this.handleResize);
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        }
    }
</script>


<style scoped>
img {
    object-fit: cover;
}
</style>        