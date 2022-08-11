<template>
    <div>
        <header-logged></header-logged>
        
        <main>
            <post-creation></post-creation>
            <post-list></post-list>
            <post-card></post-card>
        </main>

        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderLogged from "../components/HeaderLogged.vue"
    import PostCreation from "../components/PostCreation.vue"
    import PostList from "../components/PostList.vue"
    import PostCard from "../components/PostCard.vue"
    import FooterBlock from "../components/FooterBlock.vue"

    export default {
        name: "FeedView",
        data() {
            return {

            }
        },
        components: {
            "header-logged": HeaderLogged,
            "post-creation": PostCreation,
            "post-list": PostList,
            "post-card": PostCard,
            "footer-block": FooterBlock,
        },
        methods: {

        }
    }
</script>


<style scoped>

</style>