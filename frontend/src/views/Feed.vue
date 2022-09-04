<template>
    <div>
        
        <main>
            <post-creation></post-creation>
            <post-list></post-list>
        </main>

    </div>
</template>


<script>
    import PostCreation from "../components/posts/PostCreation.vue"
    import PostList from "../components/posts/PostList.vue"
    
    export default {
        name: "FeedView",
        components: {
            "post-creation": PostCreation,
            "post-list": PostList,
        }
    }
</script>


<style scoped>

</style>