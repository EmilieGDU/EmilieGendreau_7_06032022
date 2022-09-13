<template>
    <div class="my-5">
        <div class="card text-center">
            <div class="card-header">
                {{ comment.UserId }}
            </div>

            <div class="card-body">
                <p class="card-text"> {{ comment.comment }} </p>
            </div>
                        
            <div class="card-body d-flex">         
                <div class="col-6 col-sm-5 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold mb-2 p-2 w-75" v-on:click="onModifyComment">Modifier</button>
                </div>
                <div class="col-6 col-sm-5 text-end">
                    <button type="button" class="btn btn-danger fw-bold mb-2 p-2 w-75" v-on:click="onDeleteComment">Supprimer</button>
                </div>
            </div>
        </div>        
    </div>  
</template>


<script>
    export default {
        name: "CommentCard",
        props: [ "comment" ],
        methods: {
            onModifyComment() {
                this.$emit("modifyComment", this.comment.id);
            },
            onDeleteComment() {
                this.$emit("deleteComment", this.comment.id);
            },
        }       
    }
</script>


<style scoped>

</style>