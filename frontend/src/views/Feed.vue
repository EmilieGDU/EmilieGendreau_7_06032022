<template>
    <div>
        
        <main class="container col-12 col-md-9 col-lg-6 my-5">
            <post-creation></post-creation>
            <post-list 
                v-bind:posts="posts"
                v-on:modifyPost="modifyPost($event)"
                v-on:deletePost="deletePost($event)">
            </post-list>
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
        methods: {
            modifyPost(postId) {
                console.log("modifyPost depuis Feed : ", postId);
            },
            
            deletePost(postId) {
                console.log("deletePost depuis Feed : ", postId);
                PostService.deletePost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    PostService.getAllPosts()
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.posts = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            },
        },
        created() {
            PostService.getAllPosts()
            .then((response) => {
                console.log(response.data);
                // response.data = {message, data}
                this.posts = response.data.data;
            })
            .catch((error) => {
                console.log(error.response.data);
            });
        } 
    }
</script>


<style scoped>

</style>