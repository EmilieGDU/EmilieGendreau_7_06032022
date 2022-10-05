<template>
    <div class="container w-100">
        <h2>Partagez votre avis</h2>
        
        <form method="post" v-on:submit.prevent="onCreateComment">
            <div class="mb-4">
                <label v-if="showCommentForm" for="text" class="form-label">Votre commentaire</label>
                <textarea id="text" name="comment" class="form-control" v-on:focus="toggleCommentForm" rows="2" v-model="formData.comment" placeholder="Ajoutez un commentaire..."></textarea>
            </div> 
            <div v-if="showCommentForm" class="d-flex">         
                <div class="col-6 col-sm-4 me-auto d-flex text-start">
                    <button class="btn btn-cancel fw-bold p-2 w-75" v-on:click.prevent="onCancelComment">Annuler</button>
                </div>
                <div class="col-6 col-sm-4 text-end">
                    <button type="submit" class="btn btn-success fw-bold p-2 w-75">Publier</button>
                </div>
            </div>
        </form>
    </div>      
</template>


<script>
    import { getLocalStorage } from "../../services/localStorage.service"

    export default {
        name: "CommentCreation",
        props: [ "post" ],
        data() {
            console.log("++++++++++++++++++++++++++++++++")
            console.log(this.post)
            console.log("++++++++++++++++++++++++++++++++")
            return {
                user: undefined,
                showCommentForm: false,
                formData: {
                    comment: "",
                    UserId: null,
                    PostId: this.post.id,
                }
            }
        },
        methods: {
            toggleCommentForm() {
                console.log("SHOW COMMENT FORM ? : ",this.showCommentForm);
                this.showCommentForm = !this.showCommentForm;
            },

            onCancelComment() {
                this.formData.comment = "";
                this.showCommentForm = false;
            },

            onCreateComment() {
                console.log("**********************************************************************************")
                console.log("Clic sur publier Commentaire depuis COMMENTCREATION : ");
                console.log("THIS.FORMDATA.USERID = ", this.formData.UserId);
                console.log("THIS.FORMDATA.POSTID = ", this.formData.PostId);
                console.log("**********************************************************************************")
                this.$emit("createComment", this.formData);
                this.formData = {
                    comment: "",
                    UserId: null,
                    PostId: this.post.id,
                };                
                this.showCommentForm = false;
            }
        },
        created() {
            const user = getLocalStorage();
            const UserId = user.userId;

            this.user = user;
            this.formData.UserId = UserId;

            // ##################################################################################################
            console.log("COMMENTCREATION - CREATED - L77 - THIS.USER", this.user);
            console.log("COMMENTCREATION - CREATED - L78 - THIS.FORMDATA.USERID", this.formData.UserId);
            // ##################################################################################################
        } 
    }
</script>


<style scoped>
    h2 {
        /* color:  #4E5166; */
        color: #FD2D01;
    }
    
    .btn-cancel {
        background-color: #E9ECEF;    
    }

</style>