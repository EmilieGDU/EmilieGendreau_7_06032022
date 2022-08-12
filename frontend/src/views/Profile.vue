<template>
    <div>
        <header-logged></header-logged>
        
        <main class="text-center">
            <h1>Votre activité</h1>

            <div class="mt-3 mb-5">
                <a href="#posts" class="btn btn-outline-primary fw-bold me-3">Posts</a>
                <a href="#comments" class="btn btn-outline-primary fw-bold">Commentaires</a>
            </div>
            
            <h2 id="posts">Les articles que vous avez publié</h2>
            <!-- <post-creation></post-creation> -->
            <post-list></post-list>
            <post-card></post-card>
            
            <h2 id="comments">Les articles que vous avez commenté</h2>
            <!-- <post-creation></post-creation> -->
            <post-list></post-list>
            <post-card></post-card>
        </main>

        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderLogged from "../components/HeaderLogged.vue"
    // import PostCreation from "../components/PostCreation.vue"
    import PostList from "../components/PostList.vue"
    import PostCard from "../components/PostCard.vue"
    import FooterBlock from "../components/FooterBlock.vue"

    export default {
        name: "ProfileView",
        data() {
            return {
            }
        },
        components: {
            "header-logged": HeaderLogged,
            // "post-creation": PostCreation,
            "post-list": PostList,
            "post-card": PostCard,
            "footer-block": FooterBlock,
        },
        methods: {
        }
    }
</script>


<style scoped>
</style>