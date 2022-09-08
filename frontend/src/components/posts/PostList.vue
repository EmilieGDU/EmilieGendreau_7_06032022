<template>
    <div class="container col-12 col-md-9 col-lg-6 mt-5">
        <h1>La liste des posts</h1>
        <p class="text-muted"><em>Affichage anti-chronologique</em></p>
        <post-card 
            v-for="(post, index) in posts" 
            v-bind:key="index" 
            v-bind:post="post"
            v-on:modifyPost="modifyPost($event)"
            v-on:deletePost="deletePost($event)">
        </post-card>
    </div>    
</template>


<script>
    import PostCard from "../../components/posts/PostCard.vue"

    export default {
        name: "PostList",
        components: {
            "post-card": PostCard,
        },
        props: [ "posts" ],
        methods: {
            modifyPost(postId) {
                console.log("modifyPost : ", postId);
            },
            deletePost(postId) {
                console.log("deletePost : ", postId);
            },
        }      
    }
</script>


<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>