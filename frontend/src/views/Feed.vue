<template>
    <div>
        
        <main>
            <post-creation></post-creation>
            <post-list></post-list>
            <post-card></post-card>
        </main>

    </div>
</template>


<script>
    import PostService from "../services/post.service"    

    import PostCreation from "../components/PostCreation.vue"
    import PostList from "../components/PostList.vue"
    import PostCard from "../components/PostCard.vue"
    
    export default {
        name: "FeedView",
        data() {
            return {

            }
        },
        components: {
            "post-creation": PostCreation,
            "post-list": PostList,
            "post-card": PostCard,
        },
        methods: {

        },
        created() {
            PostService.getAllPosts()
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
        },
    }
</script>


<style scoped>

</style>