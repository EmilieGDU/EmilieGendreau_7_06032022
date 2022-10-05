<template>
    <div>
        
        <main class="container col-12 col-md-9 col-lg-6 my-5">
            <h1 class="text-center">Votre activité</h1>

            <div class="mt-3 mb-5 w-100"> 
                <a href="#posts" class="btn btn-outline-primary col-6 fw-bold me-auto mb-3 w-100">Posts</a>
                <a href="#comments" class="btn btn-outline-primary col-6 fw-bold w-100">Commentaires</a>
            </div>
            
            <h2 id="posts" class="mt-3">Les articles que vous avez publiés</h2>
            <p v-if="userPosts.length == 0 || userPosts.length == undefined">Vous n'avez publié aucun article jusqu'à présent.</p>
            <post-list v-else 
                v-bind:posts="userPosts"
                v-on:modifyPost="modifyUserPost($event)"
                v-on:deletePost="deleteUserPost($event)">
            </post-list>
            
            <h2 id="comments" class="mt-5">Les articles que vous avez commentés</h2>
            <p v-if="userCommentedPosts.length == 0">Vous n'avez commenté aucun article jusqu'à présent.</p>
            <post-list v-else 
                v-bind:posts="userCommentedPosts">
            </post-list>

            <go-on-top></go-on-top>
        </main>

    </div>
</template>


<script>
    import { getLocalStorage } from "../services/localStorage.service"
    import PostService from "../services/post.service"
    import UserService from "../services/user.service"
    import PostList from "../components/posts/PostList.vue"
    import GoOnTop from "../components/GoOnTop.vue"

    export default {
        name: "ProfileView",
        components: {
            "post-list": PostList,
            "go-on-top": GoOnTop,
        },
        data() {
            return {
                // Reverse chronological display of posts : ["Post 3", "Post 2", "Post 1"]
                user: undefined,
                userId: null,
                userPosts: [],
                userCommentedPosts: [],
            }
        },
        methods: {
            fetchUserPosts() {
                UserService.getUserPosts(this.userId)
                .then((response) => {
                    // console.log("=================================================================");
                    // console.log("Vos Posts publiés : ", response.data);
                    // response.data = {message, data}
                    // console.log("=================================================================");
                    this.userPosts = response.data.data;
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

            fetchUserCommentedPosts() {
                UserService.getUserCommentedPosts(this.userId)
                .then((response) => {
                    // console.log("=================================================================");
                    // console.log(response.data);
                    // response.data = {message, data}
                    // console.log("=================================================================");
                    this.userCommentedPosts = response.data.data;
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

            modifyUserPost(updatedPost) {
                console.log("##################################");
                console.log("modifyUserPost depuis Profile : ");
                console.log("UPDATEDPOST : ", updatedPost);
                console.log("##################################");
                let postId = updatedPost.postId;
                PostService.modifyPost(postId, updatedPost.updatedPost)
                .then((response) => {
                    console.log("==================================================");
                    console.log(response.data.message);
                    console.log("==================================================");
                    this.fetchUserPosts();
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
                        
            deleteUserPost(postId) {
                console.log("=================================================================");
                console.log("deleteUserPost depuis Profile : ", postId);
                console.log("=================================================================");
                PostService.deletePost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchUserPosts();
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
        created() {
            this.user = getLocalStorage() ;
            this.userId = this.user.userId ;
            
            this.fetchUserPosts();

            this.fetchUserCommentedPosts();         
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