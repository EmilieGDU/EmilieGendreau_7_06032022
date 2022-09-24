<template>
    <div class="my-3 w-100">
        <div class="card">
            <div class="card-header">
                <!-- <p> <strong> {{ comment.UserId }} </strong> a écrit : </p> -->
                <p> <strong> {{ comment.User.email }} </strong> a écrit : </p>
                <!-- <p> <strong>{{ userName }}</strong> a écrit : </p> -->
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
    // ##################################################################################################
    //import UserService from "../../services/user.service"
    // ##################################################################################################
    import CommentEdit from "./CommentEdit.vue"

    export default {
        name: "CommentCard",
        components: {
            "comment-edit": CommentEdit
        },
        props: [ "comment" ],
        data() {
            return {
                //userId: null, // Sera à récupérer du LocalStorage
                commentId: this.comment.id,
                postId: this.comment.PostId,
                //authorOfCommentId: this.comment.UserId,
                isAdmin: false,
                isAuthorOfComment: true,
                showComment: true,
                showCommentEdit: false,
            }
        },
        methods: {
            toggleCommentEdit() {
                console.log("SHOW COMMENT EDIT ? : ",this.showCommentEdit);
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
            },

        // ##################################################################################################
            // checkStatus() {
            //     // L'utilisateur connecté est-il l'auteur du commentaire ?
            //     if (this.userId == this.authorOfcommentId) {
            //         this.isAuthorOfComment = true;
            //     }
            //     // L'utilisateur connecté est-il administrateur ?
            //     else if (???)
            //     this.isAdmin = true;
            // }
        // ##################################################################################################
        },
        // ##################################################################################################
        // created() {
        //     UserService.getUserName(this.comment.UserId)
        //     .then((response) => {
        //         console.log("Pr recup userName Response.data.data.userName", response.data.data.userName)
        //         this.userName = response.data.data.userName;
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //     });
        // } 
        // ##################################################################################################      
    }
</script>


<style scoped>

</style>