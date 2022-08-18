<template>
    <div>

        <header-block class="app-header"></header-block>

        <router-view class="app-router-view"></router-view>

        <footer-block class="app-footer"></footer-block>
        
    </div>
</template>


<script>
    import HeaderBlock from "./components/HeaderBlock.vue"
    import FooterBlock from "./components/FooterBlock.vue"

    export default {
        name: 'App',
        components: {
            "header-block": HeaderBlock,
            "footer-block": FooterBlock,
        }
    }
</script>


<style lang="scss">
    html, body {
        /* border: 3px solid red; */
        min-width: 320px;
        height: 100%;
    }


    #app {
        /* background-color: yellow; */
        font-family: Lato, Arial, sans-serif;
        /* min-height: 100vh; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
                
        h1 {
            color: #FD2D01;
        }

        img {
            object-fit: cover;
        }

        .router-link-active {
            color: #FD2D01 !important;
            font-weight: bold;
            /* font-size: 1.1rem; */
        }

        .app-router-view {
            /* border: 2px solid green; */
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }        


    @media screen and (min-width: 336px) {        
        .app-router-view {
            min-height: calc(100vh - 220px);
        }
        
        /* .app-footer {
            height: 200px;
        } */
    } 

    @media screen and (min-width: 362px) {        
        .app-router-view {
            min-height: calc(100vh - 180px);
        }
        
        /* .app-footer {
            height: 160px;
        } */
    } 

    @media screen and (min-width: 612px) {        
        .app-router-view {
            min-height: calc(100vh - 140px);
        }
        
        /* .app-footer {
            height: 120px;
        } */
    } 

</style>
