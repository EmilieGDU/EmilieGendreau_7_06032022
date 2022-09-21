<template>
    <div>
        
        <main class="my-5">
            <h1 class="text-center">Votre activité</h1>

            <div class="container col-12 col-md-9 col-lg-6 text-center mt-3 mb-5"> 
                <a href="#posts" class="btn btn-outline-primary col-6 fw-bold me-auto mb-3 w-100">Posts</a>
                <a href="#comments" class="btn btn-outline-primary col-6 fw-bold w-100">Commentaires</a>
            </div>
            
            <h2 id="posts" class="text-center mt-3">Les articles que vous avez publiés</h2>
            <!-- <post-creation></post-creation> -->
            <p v-if="!userPosts || userPosts == undefined">Vous n'avez publié aucun article jusqu'à présent.</p>
            <post-list v-else 
                v-bind:posts="userPosts"
                v-on:modifyPost="modifyUserPost($event)"
                v-on:deletePost="deleteUserPost($event)">
            </post-list>
            
            <h2 id="comments" class="text-center mt-5">Les articles que vous avez commentés</h2>
            <!-- <post-creation></post-creation> -->
            <p v-if="!userCommentedPosts || userCommentedPosts == undefined">Vous n'avez commenté aucun article jusqu'à présent.</p>
            <post-list v-else 
                v-bind:posts="userCommentedPosts"
                v-on:modifyPost="modifyUserCommentedPost($event)"
                v-on:deletePost="deleteUserCommentedPost($event)">
            </post-list>
        </main>

    </div>
</template>


<script>
    import PostService from "../services/post.service"
    import UserService from "../services/user.service"
    // import PostCreation from "../components/PostCreation.vue"
    import PostList from "../components/posts/PostList.vue"

    export default {
        name: "ProfileView",
        components: {
            // "post-creation": PostCreation,
            "post-list": PostList,
        },
        data() {
            return {
                // Reverse chronological display of posts : ["Post 3", "Post 2", "Post 1"]
                //userId: null,
                userPosts: [],
                //userComments: [],
                userCommentedPosts: [],
                userId: 2,
            }
        },
        methods: {
            modifyUserPost(postId) {
                console.log("modifyUserPost depuis Profile : ", postId);
                PostService.modifyPost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    PostService.getAllPosts()
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.userPosts = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            },
            
            modifyUserCommentedPost(postId) {
                console.log("modifyUserCommentedPost depuis Profile : ", postId);
                PostService.modifyPost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    PostService.getAllPosts()
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.userCommentedPosts = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            },
            
            deleteUserPost(postId) {
                console.log("deleteUserPost depuis Profile : ", postId);
                PostService.deletePost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    PostService.getAllPosts()
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.userPosts = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            },
            
            deleteUserCommentedPost(postId) {
                console.log("deleteUserCommentedPost depuis Profile : ", postId);
                PostService.deletePost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    PostService.getAllPosts()
                    .then((response) => {
                        console.log(response.data);
                        // response.data = {message, data}
                        this.userCommentedPosts = response.data.data;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
            },
        },
        created() {
        //     function getUserId() {
        //         let user = JSON.parse(localStorage.getItem("user"));
        //         if (user && user.id) {

        //         }
        //     }; 

            UserService.getUserPosts(this.userId)
            .then((response) => {
                // console.log("Vos Posts publiés : ", response.data);
                // response.data = {message, data}
                this.userPosts = response.data.data;
            })
            .catch((error) => {
                console.log(error.response.data);
            });

            // UserService.getUserComments(userId)
            // .then((response) => {
            //     // console.log(response.data);
            //     // response.data = {message, data}
            //     this.userComments = response.data.data;
            // })
            // .catch((error) => {
            //     console.log(error.response.data);
            // });

            UserService.getUserCommentedPosts(this.userId)
            .then((response) => {
                // console.log(response.data);
                // response.data = {message, data}
                this.userCommentedPosts = response.data.data;
            })
            .catch((error) => {
                console.log(error.response.data);
            });
        }
        
    }
</script>


<style scoped>
    h2 {
        /* color:  #4E5166; */
        color: #FD2D01;
    }

    p {
        color:  #4E5166;
    }
</style>