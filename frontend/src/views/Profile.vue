<template>
    <div>
        
        <main class="text-center">
            <h1>Votre activité</h1>

            <div class="container mt-3 mb-5">
                <a href="#posts" class="btn btn-outline-primary col-6 fw-bold me-auto mb-3 w-100">Posts</a>
                <a href="#comments" class="btn btn-outline-primary col-6 fw-bold w-100">Commentaires</a>
            </div>
            
            <h2 id="posts" class="mt-3">Les articles que vous avez publiés</h2>
            <!-- <post-creation></post-creation> -->
            <post-list></post-list>
            <!-- <post-card></post-card> -->
            
            <h2 id="comments" class="mt-5">Les articles que vous avez commentés</h2>
            <!-- <post-creation></post-creation> -->
            <post-list></post-list>
            <!--<post-card></post-card> -->
        </main>

    </div>
</template>


<script>
    // import PostCreation from "../components/PostCreation.vue"
    import PostList from "../components/posts/PostList.vue"
    // import PostCard from "../components/posts/PostCard.vue"

    export default {
        name: "ProfileView",
        data() {
            return {
            }
        },
        components: {
            // "post-creation": PostCreation,
            "post-list": PostList,
            // "post-card": PostCard,
        },
        methods: {
        }
    }
</script>


<style scoped>
    /* h2 {
        color:  #4E5166;
    } */
</style>