<template>
    <div class="container mt-3 w-100">    

        <form method="post" v-on:submit.prevent="onModifyComment">
            <div class="mb-4">
                <label for="text" class="form-label h3">Modifiez votre commentaire</label>
                <textarea id="text" name="comment" class="form-control" rows="2" v-model="formData.comment"></textarea>
            </div> 

            <div class="d-flex mb-3">         
                <div class="col-6 col-sm-4 me-auto d-flex text-start">
                    <button class="btn btn-cancel fw-bold p-2 w-75" v-on:click.prevent="onCancelCommentEdit">Annuler</button>
                </div>
                <div class="col-6 col-sm-4 text-end">
                    <button type="submit" class="btn btn-success fw-bold p-2 w-75">Modifier</button>
                </div>
            </div>
        </form>

    </div>      
</template>


<script>
    import { getLocalStorage } from "../../services/localStorage.service"

    export default {
        name: "CommentEdit",
        props: [ "comment" ],
        data() {
            return {
                user: undefined,
                // Adding isAdmin property because the modification can be made by the admin
                isAdmin: false,
                formData: {
                    commentId: this.comment.id,
                    postId: this.comment.PostId,
                    comment: this.comment.comment,
                    // Adding the UserId because the modification can be made by the author of the comment or by the admin
                    UserId: null,
                }
            }
        },
        methods: {
            onCancelCommentEdit() {
                this.$emit("cancelCommentEdit");
            },
            
            onModifyComment() {
                this.$emit("modifyComment", this.formData);                
                this.onCancelCommentEdit();
            }
        },
        created() {
            const user = getLocalStorage();
            const UserId = user.userId;            
            const isAdmin = user.isAdmin;

            this.user = user;
            this.isAdmin = isAdmin;
            this.formData.UserId = UserId;
        } 
    }
</script>


<style scoped>
    
    h2 {
        color: #FD2D01;
    }

    .h3 {
        color:  #4E5166;
    }
    
    .btn-cancel {
        background-color: #E9ECEF;    
    }

</style>