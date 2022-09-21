<template>
    <div class="my-3 w-100">
        <div class="card">
            <div class="card-header">
                {{ comment.UserId }}
                <!-- <p> <strong> {{ comment.User.email }} </strong> a écrit : </p> -->
                <!-- <p> <strong>{{ userName }}</strong> a écrit : </p> -->
            </div>

            <div class="card-body">
                <p class="card-text"> {{ comment.comment }} </p>
            </div>
                        
            <div v-if="isAuthorOfComment" class="card-body d-flex">         
                <div class="col-6 col-sm-4 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold me-2 p-2 w-100" v-on:click="onModifyComment">Modifier</button>
                </div>
                <div class="col-6 col-sm-4 text-end">
                    <!-- !!! Supprimer data-bs-toogle et data-bs-target si suppression des modales !!! -->
                    <button type="button" class="btn btn-danger fw-bold p-2 w-100" v-on:click="onDeleteComment" data-bs-toogle="modal" data-bs-target="#deleteCommentConfirmModal">Supprimer</button>
                </div>
            </div>
            <div v-else-if="isAdmin" class="card-body d-flex">
                <div class="col-6 col-sm-4 mx-auto d-flex">
                    <!-- !!! Supprimer data-bs-toogle et data-bs-target si suppression des modales !!! -->
                    <button type="button" class="btn btn-danger fw-bold p-2 w-100" v-on:click="onDeleteComment" data-bs-toogle="modal" data-bs-target="#deleteCommentConfirmModal">Supprimer</button>
                </div>
            </div>

            <!-- Modals -->
            <!-- <div class="modal fade" id="deleteCommentConfirmModal" tabindex="-1" aria-labelledby="deleteCommentConfirmModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="deleteCommentConfirmModalLabel">Confirmez votre choix</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Voulez-vous vraiment supprimer ce post ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" class="btn btn-primary">Confirmer</button>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="modal fade" id="alertCommentModal" tabindex="-1" aria-labelledby="alertCommentModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="alertCommentModalLabel">{{ alertCommentModalTitle }}</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{{ alertCommentModalContent }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">D'accord</button>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- End of Modals -->
        </div>        
    </div>  
</template>


<script>
    // ##################################################################################################
    //import UserService from "../../services/user.service"
    // ##################################################################################################

    export default {
        name: "CommentCard",
        props: [ "comment" ],
        data() {
            return {
                // userName: '',
                postId: this.comment.PostId,
                commentId: this.comment.id,
                isAdmin: false,
                isAuthorOfComment: true,                
                // alertCommentModalTitle: "",
                // alertCommentModalContent: "",
            }
        },
        methods: {
            onModifyComment() {
                this.$emit("modifyComment", {postId: this.postId, commentId: this.commentId});
            },
            onDeleteComment() {
                this.$emit("deleteComment", {postId: this.postId, commentId: this.commentId});
            },
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