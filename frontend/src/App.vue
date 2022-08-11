<template>
  <div>
    <router-view class="col-12 py-3 text-center border border-3 border-primary"></router-view>
  </div>
</template>


<script>
    export default {
        name: 'App',
    }
</script>


<style lang="scss">
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
            //font-size: 1.1rem;
        }
    }
</style>
