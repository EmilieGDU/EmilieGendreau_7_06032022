<template>
    <div class="mb-5 w-100">
        <div class="card shadow">
            <!-- Post Start -->
            <div v-if="showPost">
                <div class="card-body" v-if="post.attachment">
                    <img v-bind:src="post.attachment" class="card-img-top text-light w-100 rounded-3" alt="Image associée au Post" />
                </div>
                
                <div class="card-body">
                    <h2 class="card-title">{{ post.title }}</h2>
                    <p class="card-text">{{ post.body }}</p>
                </div>
            </div>            
            <!-- Post End -->            
                        
                    
            <!-- Contenu de la PROPS SYNC transmise par Feed (et via PostList) pour lancer actualisation des likes et comments à la création d'un nouveau Post =  -->
            <p style="color: red" class="text-center">SYNC = <strong>{{ sync }}</strong></p>
            <p style="color: red" class="text-center">USERID = <strong>{{ user.userId }}</strong></p>


            <!-- Buttons Start -->
            <div v-if="(isAuthorOfPost || isAdmin) && showPost" class="card-body d-flex">         
                <div class="col-6 col-sm-5 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold p-2 w-75" v-on:click="togglePostEdit">Modifier</button>
                </div>
                <div class="col-6 col-sm-5 text-end">
                    <button type="button" class="btn btn-danger fw-bold p-2 w-75" v-on:click="onDeletePost">Supprimer</button>
                </div>
            </div>
            <!-- Buttons End -->

            <post-edit
                v-if="showPostEdit"
                v-bind:post="post"
                v-on:cancelPostEdit="cancelPostEdit"
                v-on:modifyPost="modifyPost($event)">
            </post-edit>

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
        </div>        
    </div>  
</template>


<script>
    import { getLocalStorage } from "../../services/localStorage.service"
    import LikeService from "../../services/like.service"
    import CommentService from "../../services/comment.service"
    import PostEdit from "./PostEdit.vue"
    import CommentCreation from "../comments/CommentCreation.vue"
    import CommentList from "../comments/CommentList.vue"

    export default {
        name: "PostCard",
        components: {
            "post-edit": PostEdit,
            "comment-creation": CommentCreation,
            "comment-list": CommentList,
        },
        props: [ 
            "post",
            "sync"
        ],
        data() {
            return {
                user: undefined,
                userId: null,
                // Adding isAdmin property because the modification can be made by the admin
                isAdmin: false,
                postId: this.post.id,
                isAuthorOfPost: false,
                showPost: true,
                showPostEdit: false,
                userLike: 0,
                nbLikes: 0,
                nbComments: 0,
                comments: [],
                showComments: false
            }
        },
        methods: {
            togglePostEdit() {
                // ==============================================================================================
                console.log("SHOW POST EDIT ? : ",this.showPostEdit);
                // ==============================================================================================
                this.showPost = false;
                this.showPostEdit = true;
            },

            cancelPostEdit() {
                this.showPost = true;
                this.showPostEdit = false;
            },
            
            modifyPost(updatedPost) {
                // ==============================================================================================
                console.log("MODIFYPOST depuis POSTCARD - L133 - Contenu UpdatedPost : ", updatedPost);
                // ==============================================================================================
                this.$emit("modifyPost", updatedPost);
            },

            onDeletePost() {
                this.$emit("deletePost", this.postId);
            },

            fetchPostLikes() {
                LikeService.getPostLikes(this.postId)
                .then((response) => {
                    // console.log(response.data);
                    // console.log("Type of Response.data.data.COUNT = ", typeof response.data.data.count);
                    // response.data = {message, data}
                    // this.nbLikes = response.data.data.count;
                    this.nbLikes = (response.data.data.count == undefined) ? 0 : response.data.data.count;
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
            },

            fetchPostComments() {
                CommentService.getPostComments(this.postId)
                .then((response) => {
                    // console.log("*********************************************************************************************")
                    // console.log(response.data);
                    // console.log("Response.data.message : ", response.data.message);
                    // console.log("Response.data.data : ", response.data.data);
                    // console.log("Response.data.data.count : ", response.data.data.count);
                    // console.log("Response.data.data.rows : ", response.data.data.rows);
                    // response.data = {message, data}
                    // console.log("*********************************************************************************************")
                    
                    this.nbComments = (response.data.data.count == undefined) ? 0 : response.data.data.count;
                    //this.nbComments = response.data.data.count ? response.data.data.count : 0;
                    this.comments = response.data.data.rows;
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
            },

            likePost() {
                LikeService.likePost(this.postId, this.userId)
                .then((response) => {
                    // console.log(response.data);
                    // console.log(response.data.like);
                    // response = {like, message}
                    this.userLike = response.data.like;
                    this.fetchPostLikes();
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
            },

            toggleComments() {
                console.log(this.showComments);
                this.showComments = !this.showComments;
            },

            createComment(event) {
                console.log("**********************************************************************")
                console.log("createComment depuis PostCard : ", "formData = ", event);
                console.log("createComment depuis PostCard : ", "formData.PostId = ", event.PostId);
                console.log("createComment depuis PostCard : ", "formData.UserId = ", event.UserId);
                console.log("**********************************************************************")
                CommentService.createComment(event)
                .then((response) => {
                    console.log("CREATECOMMENT(EVENT) DEPUIS POSTCARD / RESPONSE.DATA.MESSAGE : ", response.data.message);
                    console.log("CREATECOMMENT(EVENT) DEPUIS POSTCARD / RESPONSE.DATA.DATA : ", response.data.data);
                    this.fetchPostComments();                    
                    //location.reload();
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
            },

            modifyComment(event) {
                console.log("**************************************************************************************************************************")
                console.log("modifyComment depuis PostCard : ", "PostId = ", event.postId, "CommentId = ", event.commentId, "Comment = ", event.comment);
                console.log("**************************************************************************************************************************")
                let postId = event.postId;
                let commentId = event.commentId;
                CommentService.modifyComment(postId, commentId, event)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchPostComments();
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
            },
            
            deleteComment(event) {
                console.log("*********************************************************************************************")
                console.log("deleteComment depuis PostCard : ", "PostId = ", event.postId, "CommentId = ", event.commentId);
                console.log("*********************************************************************************************")
                CommentService.deleteComment(event)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchPostComments();
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
            }
        },        
        // watch: {
        //     sync: function() {
        //         this.fetchPostLikes();
        //         this.fetchPostComments();
        //     }
        // },
        beforeCreate() {
            console.log("PostCard component BEFORECREATE - Le composant", this.post.id, "va être créé");
        },
        created() {
            // =====================================================================================================================================================
            console.log("PostCard component CREATED - Le composant", this.post.id, "est créé");
            // =====================================================================================================================================================
            const user = getLocalStorage();
            const userId = user.userId;
            const isAdmin = user.isAdmin;
            const isAuthorOfPost = (this.post.UserId === userId) ? true : false;

            this.user = user;
            this.userId = userId;
            this.isAdmin = isAdmin;
            this.isAuthorOfPost = isAuthorOfPost;

            // ##################################################################################################
            console.log("POSTCARD - CREATED - L344 - THIS.USER", this.user);
            console.log("POSTCARD - CREATED - L345 - THIS.USERID", this.userId);
            console.log("POSTCARD - CREATED - L346 - THIS.ISADMIN", this.isAdmin);
            console.log("POSTCARD - CREATED - L347 - THIS.ISAUTHOROFPOST", this.isAuthorOfPost);
            // ##################################################################################################
            
            // LikeService.getUserLikes(this.postId, this.userId)
            // .then((response) => {
            //     // =====================================================================================================================================================
            //     console.log("POSTCARD / L340 / GETUSERLIKES", response.data);
            //     // response.data = {message, data}
            //     // this.userLike = response.data.data.count;
            //     // =====================================================================================================================================================
            //     this.userLike = (response.data.data.count == undefined) ? 0 : response.data.data.count;
            // })
            // .catch((error) => {
            //     if (error.response) { // Get response with a status code not in range 2xx
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
            //     }
            //     else if (error.request) { // No response
            //         console.log(error.request);
            //         // Instance of XMLHttpRequest in the Browser
            //         // Instance of http.ClientRequest in Node.js
            //     }
            //     else { // Something wrong in setting up the request
            //         console.log("Error : ", error.message);
            //     }
            //     console.log(error.config);
            // });
            // // =====================================================================================================================================================
            // console.log("POSTCARD / L363 / GETPOSTLIKES DU POST", this.post.id);
            // // =====================================================================================================================================================
            // this.fetchPostLikes();
            // // =====================================================================================================================================================
            // console.log("POSTCARD / L367 / GETPOSTCOMMENTS DU POST", this.post.id);
            // // =====================================================================================================================================================
            // this.fetchPostComments();

            // const user = JSON.parse(localStorage.getItem("user"));
            // const userId = user.userId;
            // console.log("LOCALSTORAGE.USER = ", user);
            // console.log("LOCALSTORAGE.USERID = ", userId);
        },
        beforeMount() {
            console.log("PostCard component BEFOREMOUNT - Le composant", this.post.id, " va être monté dans le DOM");
            
            LikeService.getUserLikes(this.postId, this.userId)
            .then((response) => {
                // =====================================================================================================================================================
                console.log("POSTCARD / L384 / GETUSERLIKES", response.data);
                // response.data = {message, data}
                // this.userLike = response.data.data.count;
                // =====================================================================================================================================================
                this.userLike = (response.data.data.count == undefined) ? 0 : response.data.data.count;
            })
            .catch((error) => {
                if (error.response) { // Get response with a status code not in range 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                else if (error.request) { // No response
                    console.log(error.request);
                    // Instance of XMLHttpRequest in the Browser
                    // Instance of http.ClientRequest in Node.js
                }
                else { // Something wrong in setting up the request
                    console.log("Error : ", error.message);
                }
                console.log(error.config);
            });
            
            this.fetchPostLikes();
            this.fetchPostComments();
        },
        mounted() {
            console.log("PostCard component MOUNTED - Le composant", this.post.id, " est intégré dans le DOM");
            // =====================================================================================================================================================
            
            // LikeService.getUserLikes(this.postId, this.userId)
            // .then((response) => {
            //     // =====================================================================================================================================================
            //     console.log("POSTCARD / L384 / GETUSERLIKES", response.data);
            //     // response.data = {message, data}
            //     // this.userLike = response.data.data.count;
            //     // =====================================================================================================================================================
            //     this.userLike = (response.data.data.count == undefined) ? 0 : response.data.data.count;
            // })
            // .catch((error) => {
            //     if (error.response) { // Get response with a status code not in range 2xx
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
            //     }
            //     else if (error.request) { // No response
            //         console.log(error.request);
            //         // Instance of XMLHttpRequest in the Browser
            //         // Instance of http.ClientRequest in Node.js
            //     }
            //     else { // Something wrong in setting up the request
            //         console.log("Error : ", error.message);
            //     }
            //     console.log(error.config);
            // });

            // this.fetchPostLikes();

            // this.fetchPostComments();
        },
        beforeUpdate() {
            console.log("PostCard component BEFOREUPDATE - Le composant", this.post.id, " va se mettre à jour");
            // this.fetchPostLikes();
            // this.fetchPostComments();
        },
        updated() {
            console.log("PostCard component UPDATED - Le composant", this.post.id, " s'est bien mis à jour");
        },
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