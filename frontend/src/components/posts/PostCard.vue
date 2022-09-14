<template>
    <div class="my-5">
        <div class="card shadow">
            <div class="card-body" v-if="post.attachment">
                <img v-bind:src="post.attachment" class="card-img-top text-light w-100 rounded-3" alt="Image associée au Post" />
            </div>
            
            <div class="card-body">
                <h2 class="card-title">{{ post.title }}</h2>
                <p class="card-text">{{ post.body }}</p>
            </div>
            
            <div class="card-body d-flex">         
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
                <div class="col-6 text-end">
                    <button v-if="nbComments <= 1" class="toggleComments me-2 me-sm-0" v-on:click="toggleComments">{{ nbComments }} commentaire</button>
                    <button v-else class="toggleComments me-2 me-sm-0" v-on:click="toggleComments">{{ nbComments }} commentaires</button>
                </div>
            </div>
            
            <div v-if="showComments">
                <comment-list v-bind:comments="comments"></comment-list>
            </div>
            
            <div class="card-body d-flex">         
                <div class="col-6 col-sm-5 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold mb-2 p-2 w-75" v-on:click="onModifyPost">Modifier</button>
                </div>
                <div class="col-6 col-sm-5 text-end">
                    <button type="button" class="btn btn-danger fw-bold mb-2 p-2 w-75" v-on:click="onDeletePost">Supprimer</button>
                </div>
            </div>
        </div>        
    </div>  
</template>


<script>
    import LikeService from "../../services/like.service"
    import CommentService from "../../services/comment.service"
    import CommentList from "../comments/CommentList.vue"

    export default {
        name: "PostCard",
        components: {
            "comment-list": CommentList,
        },
        props: [ "post" ],
        data() {
            return {
                postId: this.post.id,
                userId: 2,
                userLike: 0,
                nbLikes: 0,
                nbComments: 0,
                comments: [],
                showComments: false,
            }
        },
        methods: {
            likePost() {
                //this.userLike = 1;
            
            /* ########################################################## */
                LikeService.likePost(this.postId, this.userId)
                .then((response) => {
                    console.log(response.data);
                    console.log(response.data.like);
                    // response = {like, message}
                    this.userLike = response.data.like;

                    LikeService.getPostLikes(this.postId)
                        .then((response) => {
                            console.log(response.data);
                            console.log("Type of Response.data.data.COUNT = ", typeof response.data.data.count);
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
            /* ########################################################## */

            },
            unlikePost() {
                //this.userLike = 0;
            },
            toggleComments() {
                console.log(this.showComments);
                this.showComments = !this.showComments;
            },
            onModifyPost() {
                this.$emit("modifyPost", this.postId);
            },
            onDeletePost() {
                this.$emit("deletePost", this.postId);
            },
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