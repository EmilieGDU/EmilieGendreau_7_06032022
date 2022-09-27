<template>
    <div class="w-100">
        <h2>Créez votre publication</h2>

        <form method="post" v-on:submit.prevent="onCreatePost" enctype="multipart/form-data">
            <div class="mb-3">
                <label v-if="showPostForm" for="title" class="form-label">Titre du Post</label>
                <input id="title" type="text" name="title" class="form-control" v-on:focus="togglePostForm" v-model="newPost.title" placeholder="Que souhaitez-vous partager ?"/>
            </div>
            <div v-if="showPostForm">
                <div class="mb-3">
                    <label for="text" class="form-label">Votre texte</label>
                    <textarea id="text" name="body" class="form-control" rows="2" v-model="newPost.body"  placeholder="Dites-nous en plus..."></textarea>
                </div>
                <div class="mb-4">
                    <label for="formFile" class="form-label">Votre fichier</label>
                    <input id="formFile" type="file" name="attachment" class="form-control" v-on:change="onChangeFile" accept="image/png, image/jpg, image/jpeg" />
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
                newPost: {
                    title: "",
                    body: "",
                    UserId: 2 //localStorage.getItem("userId")
                },
                file: undefined,
            }
        },
        methods: {
            togglePostForm() {
                console.log("SHOW POST FORM ? : ", this.showPostForm);
                this.showPostForm = !this.showPostForm;
            },

            onChangeFile(event) {
                this.file = event.target.files[0];
                //this.$emit("update:modelValue", event.target.files[0]);
            },

            onCancelPost() {
                this.newPost = {
                    title: "",
                    body: "",
                    UserId: 2 // A RECUPERER DU LOCALSTORAGE
                },
                this.file = undefined,                
                this.showPostForm = false;
            },

            onCreatePost() {
                console.log("**********************************************************************************")
                console.log("Clic sur publier Post depuis PostCreation : ");
                console.log("THIS.newPost (event envoyé au serveur) = ", this.newPost);
                console.log("THIS.newPost.TITLE = ", this.newPost.title);
                console.log("THIS.newPost.BODY = ", this.newPost.body);
                console.log("THIS.newPost.USERID = ", this.newPost.UserId);
                console.log("THIS.FILE = ", this.file);
                console.log("**********************************************************************************")
                
                const formData = new FormData();
                formData.append("title", this.newPost.title);
                formData.append("body", this.newPost.body);
                formData.append("UserId", this.newPost.UserId);
                formData.append("image", this.file); // "image" = name defined in the multer middleware (in the last line, we specify that we expect single file named "image")
                console.log("#########################");
                console.log("FORMDATA = ", formData);
                console.log("#########################");
                
                this.$emit("createPost", formData);
                this.newPost = {
                    title: "",
                    body: "",                  
                    UserId: 2 // A RECUPERER DU LOCALSTORAGE
                }; 
                this.file = undefined,               
                this.showPostForm = false;
            }            
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