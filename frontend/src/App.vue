<template>
  <div>
    <LoginBlock />
    <SignupBlock />
    <PostList />
    <PostCard />
    <PostCreation />
  </div>
</template>

<script>
import LoginBlock from "./components/LoginBlock.vue"
import SignupBlock from "./components/SignupBlock.vue"
import PostList from "./components/PostList.vue"
import PostCard from "./components/PostCard.vue"
import PostCreation from "./components/PostCreation.vue"

export default {
  name: 'App',
  components: {
    LoginBlock,
    SignupBlock,
    PostList,
    PostCard,
    PostCreation
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
