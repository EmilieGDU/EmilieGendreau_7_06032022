<template>
    <div class="container col-12 col-md-9 col-lg-6 mt-2">
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
                console.log("modifyPost depuis Postlist : ", postId);                
                this.$emit("modifyPost", postId);
            },
            
            deletePost(postId) {
                console.log("deletePost depuis PostList : ", postId);
                this.$emit("deletePost", postId);
            },
        },
        created() {
            console.log(this.posts);
        }      
    }
</script>


<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>