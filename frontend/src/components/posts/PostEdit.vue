<template>
    <div class="container mt-3 w-100">
        <h2>Modifiez votre publication</h2>
        <form method="post" v-on:submit.prevent="onModifyPost" enctype="multipart/form-data">
            <div class="mb-4">
                <label for="title" class="form-label">Votre titre</label>
                <input id="title" type="text" name="title" class="form-control" v-model="updatedPost.title"/>
            </div>            
            <div class="mb-3">
                <label for="text" class="form-label">Votre texte</label>
                <textarea id="text" name="body" class="form-control" rows="2" v-model="updatedPost.body"></textarea>
            </div>
            <div class="mb-4">
                <label for="formFile" class="form-label">Votre fichier</label>
                <input id="formFile" type="file" name="attachment" class="form-control" v-on:change="onChangeFile" accept="image/png, image/jpg, image/jpeg"/>
            </div>                
            <div class="d-flex mb-3">         
                <div class="col-6 col-sm-4 me-auto d-flex text-start">
                    <button class="btn btn-cancel fw-bold p-2 w-75" v-on:click.prevent="onCancelPostEdit">Annuler</button>
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
        name: "PostEdit",
        props: [ "post" ],
        data() {
            // =======================================================
            console.log("++++++++++++++++++++++++++++++++++++++++++++++")
            console.log("THIS.POST depuis PostEdit - L37 : ", this.post)
            console.log("++++++++++++++++++++++++++++++++++++++++++++++")
            // =======================================================
            return {
                postId: this.post.id,
                updatedPost: {
                    title: this.post.title,
                    body: this.post.body
                },
                file: undefined,
            }
        },
        methods: {
            onChangeFile(event) {
                this.file = event.target.files[0];
            },

            onCancelPostEdit() {
                this.$emit("cancelPostEdit");
            },

            onModifyPost() {
                // ==============================================================================================
                console.log("**********************************************************************************")
                console.log("Clic sur modifier Post depuis PostEdit : ");
                console.log("THIS.updatedPost (event envoyé au serveur) = ", this.updatedPost);
                console.log("THIS.postId= ", this.postId);
                console.log("THIS.updatedPost.title = ", this.updatedPost.title);
                console.log("THIS.updatedPost.body = ", this.updatedPost.body);
                console.log("THIS.FILE = ", this.file);
                console.log("**********************************************************************************")
                // ==============================================================================================
                const formData = new FormData();
                formData.append("title", this.updatedPost.title);
                formData.append("body", this.updatedPost.body);
                formData.append("image", this.file); // "image" = name defined in the multer middleware (in the last line, we specify that we expect single file named "image")
                // ==============================================================================================
                console.log("#######################################");
                console.log("POSTEDIT - L75 - FORMDATA = ", formData);
                console.log("#######################################");
                // ==============================================================================================

                this.$emit("modifyPost", {
                    postId: this.postId,
                    updatedPost: formData
                });
                this.onCancelPostEdit();
            }            
        }
    }
</script>


<style scoped>
    h2 {
        color:  #4E5166;
        /* color: #FD2D01; */
    }

    .btn-cancel {
        background-color: #E9ECEF;
    }
</style>