<template>
    <div class="container col-12 col-md-9 col-lg-6 mt-5">
        <h1>La liste des posts</h1>
        <p class="text-muted"><em>Affichage anti-chronologique</em></p>
        <post-card v-for="(post, index) in posts" v-bind:key="index" v-bind:post="post"></post-card>
    </div>    
</template>


<script>
    import PostService from "../../services/post.service"
    import PostCard from "../../components/posts/PostCard.vue"

    export default {
        name: "PostList",
        components: {
            "post-card": PostCard,
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
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>