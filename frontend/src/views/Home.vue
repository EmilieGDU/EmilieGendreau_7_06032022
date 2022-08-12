<template>
    <div>
        <header-not-logged></header-not-logged>
        
        <home-block></home-block>
        
        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderNotLogged from "../components/HeaderNotLogged.vue"
    import HomeBlock from "../components/HomeBlock.vue"
    import FooterBlock from "../components/FooterBlock.vue"    

    export default {
        name: "HomeView",
        components: {
            "header-not-logged": HeaderNotLogged,
            "home-block": HomeBlock,
            "footer-block": FooterBlock,
        }
    }
</script>


<style scoped>

</style>