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
                        <font-awesome-icon icon="fa-regular fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 text-tertiary"></font-awesome-icon> 
                        <!-- Top icon -->
                        <font-awesome-icon icon="fa-solid fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 text-tertiary"></font-awesome-icon> 
                    </div>
                    <div class="">
                        <span class="ms-2 ms-sm-0">N likes</span>
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
                nbComments: 0,
                comments: [],
                showComments: false,
            }
        },
        methods: {
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
            CommentService.getPostComments(this.postId)
            .then((response) => {
                // console.log(response.data);
                // console.log("Response.data.message : ", response.data.message);
                // console.log("Response.data.data : ", response.data.data);
                // console.log("Response.data.data.count : ", response.data.data.count);
                // console.log("Response.data.data.rows : ", response.data.data.rows);
                // response.data = {message, data}
                this.comments = response.data.data.rows;
                this.nbComments = response.data.data.count;
            })
            .catch((error) => {
                console.log(error.response.data);
            });
        }     
    }
</script>


<style scoped>

.toggleComments {
    color: #4E5166;
    border: none;
    background-color: #FFFFFF;
}

</style>