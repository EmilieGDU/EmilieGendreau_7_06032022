<template>
    <div>
        
        <main class="text-center my-5">
            <h1>Votre activité</h1>

            <div class="container mt-3 mb-5">
                <a href="#posts" class="btn btn-outline-primary col-6 fw-bold me-auto mb-3 w-100">Posts</a>
                <a href="#comments" class="btn btn-outline-primary col-6 fw-bold w-100">Commentaires</a>
            </div>
            
            <h2 id="posts" class="mt-3">Les articles que vous avez publiés</h2>
            <!-- <post-creation></post-creation> -->
            <p v-if="!userPosts">Vous n'avez publié aucun article jusqu'à présent.</p>
            <post-list v-else v-bind:posts="userPosts"></post-list>
            
            <h2 id="comments" class="mt-5">Les articles que vous avez commentés</h2>
            <!-- <post-creation></post-creation> -->
            <p v-if="!userCommentedPosts">Vous n'avez commenté aucun article jusqu'à présent.</p>
            <post-list v-else v-bind:posts="userCommentedPosts"></post-list>
        </main>

    </div>
</template>


<script>
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
        created() {
        //     function getUserId() {
        //         let user = JSON.parse(localStorage.getItem("user"));
        //         if (user && user.id) {

        //         }
        //     }; 

            UserService.getUserPosts(this.userId)
            .then((response) => {
                // console.log(response.data);
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