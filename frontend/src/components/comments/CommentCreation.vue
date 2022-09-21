<template>
    <div class="container w-100">
        <h1>CREATION NOUVEAU COMMENTAIRE</h1>
        <div>
            <h2>Créer un Commentaire</h2>
            <form method="post" v-on:submit.prevent="onCreateComment">
                <div class="mb-4">
                    <label for="text" class="form-label">Votre commentaire</label>
                    <textarea id="text" name="comment" class="form-control" rows="2" v-model="formData.comment" placeholder="Ajoutez un commentaire..."></textarea>
                </div> 
                <div class="d-flex">         
                    <div class="col-6 col-sm-4 me-auto d-flex text-start">
                        <button class="btn btn-cancel fw-bold p-2 w-75" v-on:click.prevent="onCancelComment">Annuler</button>
                    </div>
                    <div class="col-6 col-sm-4 text-end">
                        <button type="submit" class="btn btn-success fw-bold p-2 w-75">Publier</button>
                    </div>
                </div>
            </form>
        </div>
    </div>      
</template>


<script>
    export default {
        name: "CommentCreation",
        props: [ "post" ],
        data() {
            return {
                formData: {
                    comment: "",
                    UserId: null,
                    PostId: this.post.id,
                }
            }
        },
        methods: {
            onCancelComment() {
                this.formData.comment = "";
            },
            onCreateComment() {
                console.log("Clic sur publier Commentaire : ", "THIS.FORMDATA.POSTID = ", this.formData.PostId);
                this.$emit("createComment", this.formData);
            }
        }
    }
</script>


<style scoped>

    .btn-cancel {
        background-color: #E9ECEF;    
    }

</style>