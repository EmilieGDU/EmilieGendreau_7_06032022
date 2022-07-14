<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h2>La liste des posts</h2>
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
                posts: ["Post1", "Post2", "Post3"]
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