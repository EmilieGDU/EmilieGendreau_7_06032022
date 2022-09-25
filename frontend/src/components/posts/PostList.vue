<template>
    <div class="mt-3">
        <post-card 
            v-for="(post, index) in posts" 
            v-bind:key="index" 
            v-bind:post="post"
            v-bind:sync="sync"
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
            "sync" 
        ],
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
    h2 {
        /* color:  #4E5166; */
        color: #FD2D01;
    }
   
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>