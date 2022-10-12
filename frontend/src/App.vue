<template>
    <div>

        <header-block class="app-header" v-bind:user="user" v-on:logoutUser="logoutUser"></header-block>

        <router-view class="app-router-view" v-on:loginUser="loginUser"></router-view>

        <footer-block class="app-footer"></footer-block>
        
    </div>
</template>


<script>
    import HeaderBlock from "./components/HeaderBlock.vue"
    import FooterBlock from "./components/FooterBlock.vue"
    import { getLocalStorage } from "./services/localStorage.service"
    import { removeLocalStorage } from "./services/localStorage.service"

    export default {
        name: 'App',
        components: {
            "header-block": HeaderBlock,
            "footer-block": FooterBlock,
        },
        data() {
            return {
                user: undefined
            }
        },
        methods: {
            loginUser(user) {
                this.user = user;
            },

            logoutUser() {
                removeLocalStorage();
                this.user = getLocalStorage();
            }
        },
        created() {
            const userCreated = getLocalStorage();
            this.user = userCreated;
        }, 
        beforeUpdate() {
            const userUpdated = getLocalStorage();
            this.user = userUpdated;
        }, 
    }
</script>


<style lang="scss">
    
    html, body {
        min-width: 320px;
        height: 100%;
    }

    #app {
        font-family: Lato, Arial, sans-serif;
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
        }

        .app-router-view {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }        

    /* Media queries */
    @media screen and (max-width: 361px) {        
        .app-router-view {
            min-height: calc(100vh - 285px);
        }
    } 

    @media screen and (min-width: 362px) {        
        .app-router-view {
            min-height: calc(100vh - 250px);
        }
    } 

    @media screen and (min-width: 612px) {        
        .app-router-view {
            min-height: calc(100vh - 205px);
        }
    } 

</style>
