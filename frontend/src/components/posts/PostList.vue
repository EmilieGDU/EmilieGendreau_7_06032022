<template>
    <div class="mt-3">

        <post-card 
            v-for="(post) in posts" 
            v-bind:key="post.id" 
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
            modifyPost(updatedPost) {            
                this.$emit("modifyPost", updatedPost);
            },
            
            deletePost(postId) {
                this.$emit("deletePost", postId);
            },
        }     
    }
</script>


<style scoped>
    
    h2 {
        color: #FD2D01;
    }
   
    ul {
        padding: 0;
        list-style-type: none;
    }
    
</style>