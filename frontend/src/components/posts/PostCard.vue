<template>
    <div class="mt-5 w-100">
        <div class="card shadow">
            <!-- Post Start -->
            <div class="card-body" v-if="post.attachment">
                <img v-bind:src="post.attachment" class="card-img-top text-light w-100 rounded-3" alt="Image associée au Post" />
            </div>
            
            <div class="card-body">
                <h2 class="card-title">{{ post.title }}</h2>
                <p class="card-text">{{ post.body }}</p>
            </div>
            <!-- Post End -->
            
            <div class="card-body d-flex">    
                <!-- Likes Start -->     
                <div class="col-6 d-flex text-start">
                    <div class="fa-stack">
                        <!-- Bottom icon -->
                        <button class="faStack" v-on:click="likePost">
                            <font-awesome-icon icon="fa-regular fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 text-tertiary"></font-awesome-icon> 
                        </button>
                        <!-- Top icon -->
                        <button v-if="userLike" class="faStack" v-on:click="likePost">
                            <font-awesome-icon icon="fa-solid fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 text-tertiary"></font-awesome-icon> 
                        </button>                        
                    </div>
                    <div>
                        <span v-if="nbLikes <= 1" class="ms-2 ms-sm-0 faStack"> {{ nbLikes }} like</span>
                        <span v-else class="ms-2 ms-sm-0 faStack"> {{ nbLikes }} likes</span>
                    </div>
                </div>
                <!-- Likes End -->

                <!-- Comments Start -->
                <div class="col-6 text-end">
                    <button v-if="nbComments <= 1" class="toggleComments me-2 me-sm-0" v-on:click="toggleComments">{{ nbComments }} commentaire</button>
                    <button v-else class="toggleComments" v-on:click="toggleComments">{{ nbComments }} commentaires</button>
                </div>
            </div>
            
            <div v-if="showComments">
                <comment-creation 
                    v-bind:post="post"
                    v-on:createComment="createComment($event)">
                </comment-creation>
                <comment-list 
                    v-bind:comments="comments"
                    v-on:modifyComment="modifyComment($event)"
                    v-on:deleteComment="deleteComment($event)">
                </comment-list>
            </div>
            <!-- Comments End -->

            
            <div v-if="isAuthorOfPost" class="card-body d-flex">         
                <div class="col-6 col-sm-5 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold p-2 w-75" v-on:click="onModifyPost">Modifier</button>
                </div>
                <div class="col-6 col-sm-5 text-end">
                    <!-- !!! Supprimer data-bs-toogle et data-bs-target si suppression des modales !!! -->
                    <button type="button" class="btn btn-danger fw-bold p-2 w-75" v-on:click="onDeletePost" data-bs-toogle="modal" data-bs-target="#deletePostConfirmModal">Supprimer</button>
                </div>
            </div>
            <div v-else-if="isAdmin" class="card-body d-flex">
                <div class="col-6 mx-auto d-flex">
                    <!-- !!! Supprimer data-bs-toogle et data-bs-target si suppression des modales !!! -->
                    <button type="button" class="btn btn-danger fw-bold p-2 w-100" v-on:click="onDeletePost" data-bs-toogle="modal" data-bs-target="#deletePostConfirmModal">Supprimer</button>
                </div>
            </div>

            <!-- Modals -->
            <!-- <div class="modal fade" id="deletePostConfirmModal" tabindex="-1" aria-labelledby="deletePostConfirmModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="deletePostConfirmModalLabel">Confirmez votre choix</h3>
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
            <!-- <div class="modal fade" id="alertPostModal" tabindex="-1" aria-labelledby="alertPostModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="alertPostModalLabel">{{ alertPostModalTitle }}</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>{{ alertPostModalContent }}</p>
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
    import LikeService from "../../services/like.service"
    import CommentService from "../../services/comment.service"
    import CommentCreation from "../comments/CommentCreation.vue"
    import CommentList from "../comments/CommentList.vue"

    export default {
        name: "PostCard",
        components: {
            "comment-creation": CommentCreation,
            "comment-list": CommentList,
        },
        props: [ "post" ],
        data() {
            return {
                postId: this.post.id,
                userId: 2,
                isAdmin: false,
                isAuthorOfPost: true,
                userLike: 0,
                nbLikes: 0,
                nbComments: 0,
                comments: [],
                showComments: false,
                // alertPostModalTitle: "",
                // alertPostModalContent: "",

            }
        },
        methods: {
            onModifyPost() {
                this.$emit("modifyPost", this.postId);
            },

            onDeletePost() {
                this.$emit("deletePost", this.postId);
            },

            likePost() {
                LikeService.likePost(this.postId, this.userId)
                .then((response) => {
                    // console.log(response.data);
                    // console.log(response.data.like);
                    // response = {like, message}
                    this.userLike = response.data.like;

                    LikeService.getPostLikes(this.postId)
                        .then((response) => {
                            // console.log(response.data);
                            // console.log("Type of Response.data.data.COUNT = ", typeof response.data.data.count);
                            // response.data = {message, data}
                            this.nbLikes = response.data.data.count;
                        })
                        .catch((error) => {
                            console.log(error.response);
                        });
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
            },

            toggleComments() {
                console.log(this.showComments);
                this.showComments = !this.showComments;
            },
            
            createComment(event) {
                console.log("createComment depuis PostCard : ", "formData = ", event);
                console.log("createComment depuis PostCard : ", "formData.PostId = ", event.PostId);
                CommentService.createComment(event)
                .then((response) => {
                    console.log(response.data.message);
                    CommentService.getPostComments(event.PostId)
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.comments = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            },

            modifyComment(event) {
                console.log("modifyComment depuis PostCard : ", "PostId = ", event.postId, "CommentId = ", event.commentId);
                // CommentService.modifyComment(event)
                // .then()
                // .catch();
            },
            
            deleteComment(event) {
                console.log("deleteComment depuis PostCard : ", "PostId = ", event.postId, "CommentId = ", event.commentId);
                CommentService.deleteComment(event)
                .then((response) => {
                    console.log(response.data.message);
                    CommentService.getPostComments(event.postId)
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.comments = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            }
        },
        created() {
            LikeService.getUserLikes(this.postId, this.userId)
            .then((response) => {
                console.log(response.data);
                // response.data = {message, data}
                this.userLike = response.data.data.count;
            })
            .catch((error) => {
                console.log(error.response);
            });

            LikeService.getPostLikes(this.postId)
            .then((response) => {
                // console.log(response.data);
                // response.data = {message, data}
                this.nbLikes = response.data.data.count;
            })
            .catch((error) => {
                console.log(error.response);
            });

            CommentService.getPostComments(this.postId)
            .then((response) => {
                // console.log(response.data);
                // console.log("Response.data.message : ", response.data.message);
                // console.log("Response.data.data : ", response.data.data);
                // console.log("Response.data.data.count : ", response.data.data.count);
                // console.log("Response.data.data.rows : ", response.data.data.rows);
                // response.data = {message, data}
                this.nbComments = response.data.data.count;
                this.comments = response.data.data.rows;
            })
            .catch((error) => {
                console.log(error.response);
            });
        }    
    }
</script>


<style scoped>

    .faStack {
        color: #4E5166;
        border: none;
        background-color: #FFFFFF;
    }

    .toggleComments {
        color: #4E5166;
        border: none;
        background-color: #FFFFFF;
    }

    .toggleComments:hover {
        text-decoration: underline;
    }

</style>