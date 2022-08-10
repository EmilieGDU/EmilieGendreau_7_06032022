<template>
  <div>
    <p class="mt-3 text-center">=====================================================================</p>
    <br />
    <p class="text-uppercase text-center text-muted">Affichage du router-view</p>
    <router-view class="col-11 mx-auto p-5 text-center border border-primary"></router-view>
    <br />
    <p class="mb-3 text-center">=====================================================================</p>
    <br />
    <HeaderBlock />
    <NavbarLogin />
    <br />
    <NavbarUser />
    <br />
    <NavbarAdmin />
    <SignupBlock />
    <LoginUser />
    <LoginAdmin />
    <UserList />
    <UserUpdate />
    <UserCard />
    <AdminCard />
    <PostList />
    <PostCreation />
    <PostCard />
    <NotFoundBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "./components/HeaderBlock.vue"
import NavbarLogin from "./components/NavbarLogin.vue"
import NavbarUser from "./components/NavbarUser.vue"
import NavbarAdmin from "./components/NavbarAdmin.vue"
import SignupBlock from "./components/SignupBlock.vue"
import LoginUser from "./components/LoginUser.vue"
import LoginAdmin from "./components/LoginAdmin.vue"
import UserList from "./components/UserList.vue"
import UserUpdate from "./components/UserUpdate.vue"
import UserCard from "./components/UserCard.vue"
import AdminCard from "./components/AdminCard.vue"
import PostList from "./components/PostList.vue"
import PostCreation from "./components/PostCreation.vue"
import PostCard from "./components/PostCard.vue"
import NotFoundBlock from "./components/NotFoundBlock.vue"
import FooterBlock from "./components/FooterBlock.vue"

export default {
    name: 'App',
    components: {
        HeaderBlock,
        NavbarLogin,
        NavbarUser,
        NavbarAdmin,
        SignupBlock,
        LoginUser,
        LoginAdmin,
        UserList,
        UserUpdate,
        UserCard,
        AdminCard,
        PostList,
        PostCreation,
        PostCard,
        NotFoundBlock,
        FooterBlock
    }
}
</script>

<style lang="scss">
#app {
    font-family: Lato, Arial, sans-serif;
    //-webkit-font-smoothing: antialiased;
    //-moz-osx-font-smoothing: grayscale;
    //text-align: center;
    //color: #2c3e50;
    //margin-top: 60px;

    h2 {
        color: #FD2D01;
    }
    
    .router-link-active {
        color: #FD2D01 !important;
        font-weight: bold;
        //font-size: 1.1rem;
    }
}
</style>
