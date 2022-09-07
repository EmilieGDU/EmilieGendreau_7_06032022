<template>
    <div class="my-5">
        <div class="card shadow">
            <div class="card-body">
                <img v-bind:src="post.attachment" class="card-img-top text-light w-100 rounded-3" alt="Image associée au Post" />
            </div>
            
            <div class="card-body">
                <h2 class="card-title">{{ post.title }}</h2>
                <p class="card-text">{{ post.body }}</p>
            </div>
            
            <div class="card-body d-flex">         
                <div class="col-6 d-flex text-start">
                    <div class="fa-stack">
                        <!-- Bottom icon -->
                        <font-awesome-icon icon="fa-regular fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 text-tertiary"></font-awesome-icon> 
                        <!-- Top icon -->
                        <font-awesome-icon icon="fa-solid fa-thumbs-up" class="fa-stack-1x ms-0 mt-1 text-tertiary"></font-awesome-icon> 
                    </div>
                    <div class="">
                        <span class="ms-2 ms-sm-0">N likes</span>
                    </div>
                </div>
                <div class="col-6 text-end">
                    <a href="#" class="card-link">N commentaires</a>
                </div>
            </div>
            
            <div class="card-body d-flex">         
                <div class="col-6 col-sm-5 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold mb-2 w-100" v-on:click="onModifyPost">Modifier</button>
                </div>
                <div class="col-6 col-sm-5 text-end">
                    <button type="button" class="btn btn-danger fw-bold mb-2 w-100" v-on:click="onDeletePost">Supprimer</button>
                </div>
            </div>
        </div>        
    </div>  
</template>


<script>
    export default {
        name: "PostCard",
        props: [ "post" ],
        methods: {
            onModifyPost() {
                this.$emit("modifyPost", this.post.id);
            },
            onDeletePost() {
                this.$emit("deletePost", this.post.id);
            },
        }       
    }
</script>


<style scoped>

</style>