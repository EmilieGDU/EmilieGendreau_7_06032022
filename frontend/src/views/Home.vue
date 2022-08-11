<template>
    <div>
        <header-not-logged></header-not-logged>
        
        <main>
            <div class="card bg-light">
                <div class="row g-0">
                    <div class="col-md-8 mt-sm-2 mt-md-3">
                        <div class="card-body">
                            <h1 v-html="citation" class="card-title mb-2 mb-md-3"></h1>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <img src="../assets/community_resized.png" class="card-body rounded-2 img-fluid" alt="Illustration de collègues de travail">
                    </div>
                </div>
            </div>        
        </main>
        
        <footer-block></footer-block>
    </div>
</template>


<script>
    import HeaderNotLogged from "../components/HeaderNotLogged.vue"
    import FooterBlock from "../components/FooterBlock.vue"    

    export default {
        name: "HomeView",
        data() {
            return {
                citation: "Bienvenue dans votre <br /> communauté <br /> d'entreprise."
            }
        },
        components: {
            "header-not-logged": HeaderNotLogged,
            "footer-block": FooterBlock,
        }
    }
</script>


<style scoped>

</style>