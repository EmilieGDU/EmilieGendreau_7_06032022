<template>
    <div class="mt-3">
        <!-- <post-card 
            v-for="(post, index) in posts" 
            v-bind:key="index" 
            v-bind:post="post"
            v-bind:sync="sync"
            v-on:modifyPost="modifyPost($event)"
            v-on:deletePost="deletePost($event)">
        </post-card> -->
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
        props: [ 
            "posts",
            // "sync" 
        ],
        methods: {
            modifyPost(updatedPost) {
                console.log("MODIFYPOST depuis POSTCARD - Contenu UpdatedPost : ", updatedPost);               
                this.$emit("modifyPost", updatedPost);
            },
            
            deletePost(postId) {
                console.log("deletePost depuis PostList : ", postId);
                this.$emit("deletePost", postId);
            },
        },
        created() {
            console.log("Postlist component CREATED : ", this.posts);
        }      
    }
</script>


<style scoped>
    h2 {
        /* color:  #4E5166; */
        color: #FD2D01;
    }
   
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>