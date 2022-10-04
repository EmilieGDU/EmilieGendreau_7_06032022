<template>
    <div>
        
        <main class="container col-12 col-md-9 col-lg-6 my-5">
            <h1 class="text-center mb-5">Votre espace communautaire</h1>            

            <post-creation
                v-on:createPost="createPost($event)">
            </post-creation>

            <h2 class="mt-5">Le fil d'actualités</h2>

            <p v-if="posts.length == 0 || posts.length == undefined" class="mt-3">
                Aucun article à afficher pour le moment... Soyez le premier à publier !
            </p>

            <post-list v-else 
                v-bind:posts="posts"
                v-bind:sync="sync"
                v-on:modifyPost="modifyPost($event)"
                v-on:deletePost="deletePost($event)">
            </post-list>
            <!-- <post-list v-else 
                v-bind:posts="posts"
                v-on:modifyPost="modifyPost($event)"
                v-on:deletePost="deletePost($event)">
            </post-list> -->

            <go-on-top></go-on-top>
        </main>

    </div>
</template>


<script>
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
                // Reverse chronological display of posts : ["Post 3", "Post 2", "Post 1"]
                posts: [],
                sync: false
            };
        },
        methods: {
            fetchAllPosts() {
                PostService.getAllPosts()
                .then((response) => {
                    // ==========================================================
                    console.log("################################");
                    console.log("FEED - L62 - LancementFetchAllPosts");
                    console.log(response.data);
                    // response.data = {message, data}
                    console.log("################################");
                    // ==========================================================
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
                console.log("**********************************************************************")
                console.log("createPost depuis FEED - L89 : ");
                console.log("formData (= newPost) ", newPost);
                console.log("**********************************************************************")
                PostService.createPost(newPost)
                    .then((response) => {
                        console.log(response.data.message);
                        this.fetchAllPosts();
                        this.sync = true;
                        location.reload();
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
                // ==============================================================================================
                console.log("##################################");
                console.log("modifyPost depuis Feed : ");
                console.log("UPDATEDPOST : ", updatedPost);
                console.log("##################################");
                // ==============================================================================================
                let postId = updatedPost.postId;
                PostService.modifyPost(postId, updatedPost.updatedPost)
                .then((response) => {
                    console.log(response.data.message);
                    this.fetchAllPosts();                    
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
            
            deletePost(postId) {
                // ==============================================================================================
                console.log("deletePost depuis FEED - L160 : ", postId);
                // ==============================================================================================
                PostService.deletePost(postId)
                .then((response) => {
                    // ==============================================================================================
                    console.log(response.data.message);
                    // ==============================================================================================
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
        mounted() {
            // ====================================================
            console.log("Feed - MOUNTED");
            // ====================================================
        } ,
        created() {
            // ====================================================
            console.log("Feed - CREATED");
            console.log("################################");
            console.log("Feed - CREATED - AppelFetchAllPosts");
            console.log("################################");
            // ====================================================
            
            this.fetchAllPosts();
        }, 
        updated() {
            // ====================================================
            console.log("Feed - UPDATED");
            // ====================================================
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