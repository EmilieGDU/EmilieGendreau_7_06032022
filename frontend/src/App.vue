<template>
  <div>
    <HeaderBlock />
    <NavBar />
    <LoginBlock />
    <SignupBlock />
    <PostList />
    <PostCard />
    <PostCreation />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "./components/HeaderBlock.vue"
import NavBar from "./components/NavBar.vue"
import LoginBlock from "./components/LoginBlock.vue"
import SignupBlock from "./components/SignupBlock.vue"
import PostList from "./components/PostList.vue"
import PostCard from "./components/PostCard.vue"
import PostCreation from "./components/PostCreation.vue"
import FooterBlock from "./components/FooterBlock.vue"

export default {
  name: 'App',
  components: {
    HeaderBlock,
    NavBar,
    LoginBlock,
    SignupBlock,
    PostList,
    PostCard,
    PostCreation,
    FooterBlock
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
