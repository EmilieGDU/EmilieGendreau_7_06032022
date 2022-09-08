<template>
    <div>
        
        <main class="my-5">
            <post-creation></post-creation>
            <post-list v-bind:posts="posts"></post-list>
        </main>

    </div>
</template>


<script>
    import PostService from "../services/post.service"
    import PostCreation from "../components/posts/PostCreation.vue"
    import PostList from "../components/posts/PostList.vue"
    
    export default {
        name: "FeedView",
        components: {
            "post-creation": PostCreation,
            "post-list": PostList,
        },
        data() {
            return {
                // Reverse chronological display of posts : ["Post 3", "Post 2", "Post 1"]
                posts: []
            };
        },
        created() {
            PostService.getAllPosts()
            .then((response) => {
                // console.log(response.data);
                // response.data = {message, data}
                this.posts = response.data.data;
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        } 
    }
</script>


<style scoped>

</style>