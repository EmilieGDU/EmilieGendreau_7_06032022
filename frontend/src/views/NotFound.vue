<template>
    <div>
        <header-logged></header-logged>
        
        <main>
            <not-found></not-found>
        </main>

        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderLogged from "../components/HeaderLogged.vue"
    import NotFoundBlock from "../components/NotFoundBlock.vue"
    import FooterBlock from "../components/FooterBlock.vue"

    export default {
        name: "NotFoundView",
        components: {
            "header-logged": HeaderLogged,
            "not-found": NotFoundBlock,
            "footer-block": FooterBlock,
        }
    }
</script>


<style scoped>

</style>