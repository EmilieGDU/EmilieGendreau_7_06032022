<template>
    <div class="container mt-3 w-100">
        <h2>Modifiez votre publication</h2>
        <form method="post" v-on:submit.prevent="onModifyPost" enctype="multipart/form-data">
            <div class="mb-4">
                <label for="title" class="form-label">Votre titre</label>
                <input id="title" type="text" name="title" class="form-control" v-model="formData.title"/>
            </div>            
            <div class="mb-3">
                <label for="text" class="form-label">Votre texte</label>
                <textarea id="text" name="body" class="form-control" rows="2" v-model="formData.body"></textarea>
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
            console.log("++++++++++++++++++++++++++++++++++++++++++")
            console.log("THIS.POST depuis PostEdit : ", this.post)
            console.log("++++++++++++++++++++++++++++++++++++++++++")
            return {
                formData: {
                    title: this.post.title,
                    body: this.post.body,
                    attachment: this.post.attachment,
                    UserId: this.post.UserId
                }
            }
        },
        methods: {
            onChangeFile(event) {
                this.formData.attachment = event.target.files[0].name;
            },

            onCancelPostEdit() {
                this.$emit("cancelPostEdit");
            },

            onModifyPost() {
                console.log("**********************************************************************************")
                console.log("Clic sur modifier Post depuis PostEdit : ");
                console.log("THIS.FORMDATA (event envoyé au serveur) = ", this.formData);
                console.log("THIS.FORMDATA.TITLE = ", this.formData.title);
                console.log("THIS.FORMDATA.BODY = ", this.formData.body);
                console.log("THIS.FORMDATA.ATTACHMENT = ", this.formData.attachment);
                console.log("THIS.FORMDATA.USERID = ", this.formData.UserId);
                console.log("**********************************************************************************")
                this.$emit("modifyPost", this.formData);
                this.onCancelPostEdit();
            },
            
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