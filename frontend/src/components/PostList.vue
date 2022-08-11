<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h1>La liste des posts</h1>
        <p class="text-muted"><em>Affichage anti-chronologique</em></p>
        <ul>
            <li v-for="(post, index) in posts" v-bind:key="index"> {{ post }} </li>
        </ul>
    </div>    
</template>


<script>
    export default {
        name: "PostList",
        data() {
            return {
                posts: ["Post 3", "Post 2", "Post 1"]
            }
        }        
    }
</script>


<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>