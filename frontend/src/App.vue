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
                console.log("#################################")
                this.user = user;
                console.log("LOGINUSER - L34 - APP.VUE", this.user)
                console.log("#################################")
            },
            logoutUser() {
                removeLocalStorage();
                this.user = getLocalStorage();
            }
        },
        created() {
            const userCreated = getLocalStorage();
            this.user = userCreated;
            // ##################################################################################################
            console.log("APP.VUE - CREATED - L34 - USERCREATED", userCreated);
            // ##################################################################################################
        }, 
        beforeUpdate() {
            const userUpdated = getLocalStorage();
            this.user = userUpdated;
            // ##################################################################################################
            console.log("APP.VUE - UPDATED - L40 - USERUPDATED", userUpdated);
            // ##################################################################################################
        }, 
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


    @media screen and (max-width: 361px) {        
        .app-router-view {
            // min-height: calc(100vh - 220px);
            min-height: calc(100vh - 285px);
        }
        
        /* .app-footer {
            height: 200px;
        } */
    } 

    @media screen and (min-width: 362px) {        
        .app-router-view {
            // min-height: calc(100vh - 180px);
            min-height: calc(100vh - 250px);
        }
        
        /* .app-footer {
            height: 160px;
        } */
    } 

    @media screen and (min-width: 612px) {        
        .app-router-view {
            // min-height: calc(100vh - 140px);
            min-height: calc(100vh - 205px);
        }
        
        /* .app-footer {
            height: 120px;
        } */
    } 

</style>
