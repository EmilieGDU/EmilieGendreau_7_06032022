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
                <h1 class="text-center mb-5">Votre espace communautaire</h1>            

                <post-creation
                    v-on:createPost="createPost($event)">
                </post-creation>

                <h2 class="mt-5">Le fil d'actualités</h2>

                <p v-if="posts == undefined || posts.length == 0" class="mt-3">
                    Aucun article à afficher pour le moment... Soyez le premier à publier !
                </p>

                <post-list v-else 
                    v-bind:posts="posts"
                    v-on:modifyPost="modifyPost($event)"
                    v-on:deletePost="deletePost($event)">
                </post-list>

                <go-on-top></go-on-top>
            </div>
            
        </main>

    </div>
</template>


<script>
    import { getLocalStorage } from "../services/localStorage.service"
    import PostService from "../services/post.service"
    import PostCreation from "../components/posts/PostCreation.vue"
    import PostList from "../components/posts/PostList.vue"    
    import GoOnTop from "../components/GoOnTop.vue"
    
    export default {
        name: "FeedView",
        components: {
            "post-creation": PostCreation,
            "post-list": PostList,            
            "go-on-top": GoOnTop,
        },
        data() {
            return {
                user: undefined,
                posts: []
            };
        },
        methods: {
            goLogin() {
                this.$router.push("/login");
            },

            login() {
                this.user = getLocalStorage();                
                this.$emit('loginUser', this.user);
            },

            fetchAllPosts() {
                PostService.getAllPosts()
                .then((response) => {
                    this.posts = response.data.data;
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
            
            createPost(newPost) {
                PostService.createPost(newPost)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchAllPosts();
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

            modifyPost(updatedPost) {
                let postId = updatedPost.postId;
                PostService.modifyPost(postId, updatedPost.updatedPost)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchAllPosts();
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
            
            deletePost(postId) {
                PostService.deletePost(postId)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchAllPosts();
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
            this.login();
            this.fetchAllPosts();
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