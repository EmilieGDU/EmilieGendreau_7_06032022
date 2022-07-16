<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h2>Une carte "Post"</h2>
        
        <div class="card shadow">
            <div class="card-body bg-dark mt-3 mx-3 rounded-2">
                <img src="../assets/icon-left-font-monochrome-white-resized.png" class="card-img-top text-light w-100" alt="Image associée au Post">
            </div>
            <div class="card-body">
                <h3 class="card-title">Card title</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body d-flex">
                <div class="fa-stack col-1">
                    <font-awesome-icon icon="fa-regular fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 me-3 text-primary"></font-awesome-icon> <!-- Bottom icon -->
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 me-3 text-primary"></font-awesome-icon> <!-- Top icon -->
                </div>
                <div class="col-5">
                    <a href="#" class="card-link ms-2 ms-sm-0 me-3 text-decoration-none">N likes</a>
                </div>
                <div class="col-6 text-end">
                    <a href="#" class="card-link text-decoration-none">N commentaires</a>
                </div>
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