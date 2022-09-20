<template>
    <div class="container mt-2">
        <h1>La liste des commentaires</h1>
        <p class="text-muted"><em>Affichage chronologique</em></p>
        <comment-card
            v-for="(comment, index) in comments" 
            v-bind:key="index" 
            v-bind:comment="comment"
            v-on:modifyComment="modifyComment($event)"
            v-on:deleteComment="deleteComment($event)">
        </comment-card>
    </div>    
</template>


<script>
    import CommentCard from "./CommentCard.vue"

    export default {
        name: "CommentList",
        components: {
            "comment-card": CommentCard,
        },
        props: [ "comments" ],
        methods: {
            modifyComment(event) {
                console.log("modifyComment depuis CommentList : ", "PostId = ", event.postId, "CommentId = ", event.commentId);
                this.$emit("modifyComment", {postId: event.postId, commentId: event.commentId});
            },
            
            deleteComment(event) {
                console.log("deleteComment depuis CommentList : ", "PostId = ", event.postId, "CommentId = ", event.commentId);
                this.$emit("deleteComment", {postId: event.postId, commentId: event.commentId});
            },
        },
        created() {
            console.log(this.comments);
        }      
    }
</script>


<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>