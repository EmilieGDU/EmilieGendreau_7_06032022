<template>
    <div class="my-3">
        <div class="card">
            <div class="card-header">
                {{ comment.UserId }}
                <!-- <p> <strong> {{ comment.User.email }} </strong> a écrit : </p> -->
                <!-- <p> <strong>{{ userName }}</strong> a écrit : </p> -->
            </div>

            <div class="card-body">
                <p class="card-text"> {{ comment.comment }} </p>
            </div>
                        
            <div v-if="isAuthorOfComment" class="card-body d-flex">         
                <div class="col-6 col-sm-4 me-auto d-flex text-start">
                    <button type="button" class="btn btn-success fw-bold me-2 p-2 w-100" v-on:click="onModifyComment">Modifier</button>
                </div>
                <div class="col-6 col-sm-4 text-end">
                    <button type="button" class="btn btn-danger fw-bold p-2 w-100" v-on:click="onDeleteComment">Supprimer</button>
                </div>
            </div>
            <div v-else-if="isAdmin" class="card-body d-flex">
                <div class="col-6 col-sm-4 mx-auto d-flex">
                    <button type="button" class="btn btn-danger fw-bold p-2 w-100" v-on:click="onDeleteComment">Supprimer</button>
                </div>
            </div>
        </div>        
    </div>  
</template>


<script>
    // ##################################################################################################
    //import UserService from "../../services/user.service"
    // ##################################################################################################

    export default {
        name: "CommentCard",
        props: [ "comment" ],
        data() {
            return {
                // userName: '',
                isAdmin: false,
                isAuthorOfComment: true,
            }
        },
        methods: {
            onModifyComment() {
                this.$emit("modifyComment", this.comment.id);
            },
            onDeleteComment() {
                this.$emit("deleteComment", this.comment.id);
            },
        },
        // ##################################################################################################
        // created() {
        //     UserService.getUserName(this.comment.UserId)
        //     .then((response) => {
        //         console.log("Pr recup userName Response.data.data.userName", response.data.data.userName)
        //         this.userName = response.data.data.userName;
        //     })
        //     .catch((error) => {
        //         console.log(error.response.data);
        //     });
        // } 
        // ##################################################################################################      
    }
</script>


<style scoped>

</style>