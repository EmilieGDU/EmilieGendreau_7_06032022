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
    export default {
        name: "CommentEdit",
        props: [ "comment" ],
        data() {
            console.log("++++++++++++++++++++++++++++++++")
            console.log(this.comment)
            console.log("++++++++++++++++++++++++++++++++")
            return {
                formData: {
                    comment: this.comment.comment,
                }
            }
        },
        methods: {
            onCancelCommentEdit() {
                this.$emit("cancelCommentEdit");
            },
            onModifyComment() {
                console.log("**********************************************************************************")
                console.log("Clic sur modifier Commentaire depuis CommentEdit : ", "THIS.FORMDATA.COMMENT = ", this.formData.comment);
                console.log("**********************************************************************************")
                this.$emit("modifyComment", this.formData);
                this.formData = {
                    comment: "",
                };                
                this.onCancelCommentEdit();
            }
        }
    }
</script>


<style scoped>
    h2 {
        /* color:  #4E5166; */
        color: #FD2D01;
    }

    .h3 {
        color:  #4E5166;
    }
    
    .btn-cancel {
        background-color: #E9ECEF;    
    }

</style>