<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h2>Une carte "Post"</h2>
        
        <div class="card">
            <div class="card-body bg-dark mt-3 mx-3">
                <img src="../assets/icon-left-font-monochrome-white-resized.png" class="card-img-top text-light w-100" alt="Image associée au Post">
            </div>
            <div class="card-body">
                <h3 class="card-title">Card title</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body">
                <font-awesome-icon icon="fa-solid fa-heart" class="me-3"></font-awesome-icon>
                <font-awesome-icon icon="fa-regular fa-heart" class="me-3"></font-awesome-icon>
                <a href="#" class="card-link me-5 text-decoration-none">N likes</a>
                <a href="#" class="card-link text-decoration-none">N commentaires</a>
            </div>
        </div>
        
    </div>  
</template>


<script>
    export default {
        name: "PostCard",
        data() {
            return {

            }
        }        
    }
</script>


<style scoped>

</style>