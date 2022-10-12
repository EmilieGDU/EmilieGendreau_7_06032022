<template>
    <div>
        
        <main class="container col-12 col-md-9 col-lg-6 my-5">
            
            <!-- If user is not logged-->
            <div v-if="!user" class="container col-12 col-md-9 w-100 text-center">
                <img src="../assets/cadenas_resized_100px.png" class="rounded-2 mb-3" alt="Reserved access">

                <h1>Accès réservé</h1>

                <p>Vous devez être connecté pour pouvoir consulter les ressources de l'application.</p>

                <button v-on:click="goLogin" class="btn btn-primary fw-bold my-3 w-100">S'identifier</button>

            </div>
            <!-- If user is not logged-->

            <!-- If user is logged-->
            <div v-else>
                <h1 class="text-center">Votre activité</h1>

                <div class="mt-3 mb-5 w-100"> 
                    <a href="#posts" class="btn btn-outline-primary col-6 fw-bold me-auto mb-3 w-100">Posts</a>
                    <a href="#comments" class="btn btn-outline-primary col-6 fw-bold w-100">Commentaires</a>
                </div>
                
                <!-- User-posted articles-->
                <h2 id="posts" class="mt-3">Les articles que vous avez publiés</h2>
                
                <p v-if="userPosts == undefined || userPosts.length == 0">Vous n'avez publié aucun article jusqu'à présent.</p>
                
                <post-list v-else 
                    v-bind:posts="userPosts"
                    v-on:modifyPost="modifyUserPost($event)"
                    v-on:deletePost="deleteUserPost($event)">
                </post-list>
                <!-- User-posted articles-->
                
                <!-- User commented articles-->
                <h2 id="comments" class="mt-5">Les articles que vous avez commentés</h2>
                
                <p v-if="userCommentedPosts == undefined || userCommentedPosts.length == 0">Vous n'avez commenté aucun article jusqu'à présent.</p>
                
                <post-list v-else 
                    v-bind:posts="userCommentedPosts">
                </post-list>
                <!-- User commented articles-->

                <go-on-top></go-on-top>
            </div>
            
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
                user: undefined,
                userId: null,
                userPosts: [],
                userCommentedPosts: [],
            }
        },
        methods: {
            goLogin() {
                this.$router.push("/login");
            },

            fetchUserPosts() {
                UserService.getUserPosts(this.userId)
                .then((response) => {
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
                let postId = updatedPost.postId;
                PostService.modifyPost(postId, updatedPost.updatedPost)
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
            },
                        
            deleteUserPost(postId) {
                PostService.deletePost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchUserPosts();                 
                    this.fetchUserCommentedPosts(); 
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
            this.user = getLocalStorage();
            this.userId = this.user ? this.user.userId : null;
            
            this.fetchUserPosts();

            this.fetchUserCommentedPosts();
        }        
    }
</script>


<style scoped>
    
    h2 {
        color: #FD2D01;
    }

    p {
        color:  #4E5166;
    }
    
</style>