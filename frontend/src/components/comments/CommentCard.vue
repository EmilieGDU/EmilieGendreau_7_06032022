<template>
    <div class="my-3 w-100">
        
        <div class="card">
            <div class="card-header">
                <p> <strong> {{ comment.User.email }} </strong> a écrit : </p>
            </div>

            <div v-if="showComment" class="card-body">
                <p class="card-text"> {{ comment.comment }} </p>
            </div>
            
            <!-- Buttons Start -->
            <div v-if="(isAuthorOfComment || isAdmin) && showComment" class="card-body d-flex">         
                <div class="col-6 col-sm-4 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold me-2 p-2 w-100" v-on:click="toggleCommentEdit">Modifier</button>
                </div>
                <div class="col-6 col-sm-4 text-end">
                    <button type="button" class="btn btn-danger fw-bold p-2 w-100" v-on:click="onDeleteComment">Supprimer</button>
                </div>
            </div>
            <!-- Buttons End -->

            <comment-edit
                v-if="showCommentEdit"
                v-bind:comment="comment"
                v-on:cancelCommentEdit="cancelCommentEdit"
                v-on:modifyComment="modifyComment($event)">
            </comment-edit>
        </div> 
               
    </div>  
</template>


<script>
    import { getLocalStorage } from "../../services/localStorage.service"
    import CommentEdit from "./CommentEdit.vue"

    export default {
        name: "CommentCard",
        components: {
            "comment-edit": CommentEdit
        },
        props: [ "comment" ],
        data() {
            return {
                user: undefined,
                userId: null,
                // Adding isAdmin property because the modification can be made by the admin
                isAdmin: false,
                commentId: this.comment.id,
                postId: this.comment.PostId,
                isAuthorOfComment: false,
                showComment: true,
                showCommentEdit: false,
            }
        },
        methods: {
            toggleCommentEdit() {
                this.showComment = false;
                this.showCommentEdit = true;
            },
            cancelCommentEdit() {
                this.showComment = true;
                this.showCommentEdit = false;
            },
            modifyComment(event) {
                this.$emit("modifyComment", event);
            },
            onDeleteComment() {
                this.$emit("deleteComment", {postId: this.postId, commentId: this.commentId});
            }
        },        
        created() {
            const user = getLocalStorage();
            const userId = user.userId;
            const isAdmin = user.isAdmin;
            const isAuthorOfComment = (this.comment.UserId === userId) ? true : false;

            this.user = user;
            this.userId = userId;
            this.isAdmin = isAdmin;
            this.isAuthorOfComment = isAuthorOfComment;
        }     
    }
</script>


<style scoped>

</style>