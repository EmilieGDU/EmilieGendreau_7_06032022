<template>
    <div class="w-100">
        <h2>Créez votre publication</h2>

        <form method="post" v-on:submit.prevent="onCreatePost" enctype="multipart/form-data">
            <div class="mb-3">
                <label v-if="showPostForm" for="title" class="form-label">Titre du Post</label>
                <input id="title" type="text" name="postTitle" class="form-control" v-on:focus="togglePostForm" v-model="formData.title" placeholder="Que souhaitez-vous partager ?"/>
            </div>
            <div v-if="showPostForm">
                <div class="mb-3">
                    <label for="text" class="form-label">Votre texte</label>
                    <textarea id="text" name="postBody" class="form-control" rows="2" v-model="formData.body"  placeholder="Dites-nous en plus..."></textarea>
                </div>
                <div class="mb-4">
                    <label for="formFile" class="form-label">Votre fichier</label>
                    <!-- <input id="formFile" type="file" class="form-control" v-model="formData.attachment" /> -->
                    <input id="formFile" type="file" name="postAttachment" accept="image/png, image/jpg, image/jpeg" class="form-control" />
                </div>                
                <div class="d-flex">         
                    <div class="col-6 col-sm-4 me-auto d-flex text-start">
                        <button class="btn btn-cancel fw-bold p-2 w-75" v-on:click.prevent="onCancelPost">Annuler</button>
                    </div>
                    <div class="col-6 col-sm-4 text-end">
                        <button type="submit" class="btn btn-success fw-bold p-2 w-75">Publier</button>
                    </div>
                </div>
            </div>
        </form>
    </div>      
</template>


<script>
    export default {
        name: "PostCreation",
        data() {
            return {
                showPostForm: false,
                formData: {
                    title: "",
                    body: "",
                    //attachment: ""
                }
            }
        },
        methods: {
            togglePostForm() {
                console.log("SHOW POST FORM ? : ", this.showPostForm);
                this.showPostForm = !this.showPostForm;
            },
            onCancelPost() {
                this.formData = {
                    title: "",
                    body: "",
                    //attachment: ""
                },                
                this.showPostForm = false;
            },
            onCreatePost() {
                console.log("**********************************************************************************")
                console.log("Clic sur publier Post : ", "THIS.FORMDATA.TITLE = ", this.formData.title, "|| THIS.FORMDATA.BODY = ", this.formData.body);
                console.log("**********************************************************************************")
                this.$emit("createPost", this.formData);
                this.formData = {
                    title: "",
                    body: "",
                    //attachment: ""
                };                
                this.showPostForm = false;
            },
            
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