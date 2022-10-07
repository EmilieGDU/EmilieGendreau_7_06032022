<template>
    <div class="container mt-5">
        <h2>Les réactions de vos collègues</h2>
        
        <p v-if="comments.length == 0" class="mt-3">
                Aucun commentaire à afficher pour le moment... <br />
                Soyez le premier à donner votre avis !
            </p>
        
        <comment-card v-else
            v-for="(comment) in comments" 
            v-bind:key="comment.id" 
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
                console.log("modifyComment depuis CommentList : ");
                console.log("Comment = ", event);
                this.$emit("modifyComment", event);
            },
            
            deleteComment(event) {
                console.log("deleteComment depuis CommentList : ");
                console.log("postId = ", event.postId);
                console.log("commentId = ", event.commentId);
                this.$emit("deleteComment", {postId: event.postId, commentId: event.commentId});
            },
        },
        created() {
            console.log("THIS.COMMENTS depuis CommentList", this.comments);
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