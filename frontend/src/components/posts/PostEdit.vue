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
    import { getLocalStorage } from "../../services/localStorage.service"

    export default {
        name: "PostEdit",
        props: [ "post" ],
        data() {
            return {
                user: undefined,
                // Adding isAdmin property because the modification can be made by the admin
                isAdmin: false,
                postId: this.post.id,
                updatedPost: {
                    title: this.post.title,
                    body: this.post.body,
                    // Adding the UserId because the modification can be made by the author of the post or by the admin
                    UserId: null
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
                const formData = new FormData();
                formData.append("title", this.updatedPost.title);
                formData.append("body", this.updatedPost.body);
                formData.append("UserId", this.updatedPost.UserId);
                formData.append("image", this.file); // "image" = name defined in the multer middleware (in the last line, we specify that we expect single file named "image")

                this.$emit("modifyPost", {
                    postId: this.postId,
                    updatedPost: formData
                });

                this.onCancelPostEdit();
            }            
        },
        created() {
            const user = getLocalStorage();
            const UserId = user.userId;
            const isAdmin = user.isAdmin;

            this.user = user;            
            this.isAdmin = isAdmin;
            this.updatedPost.UserId = UserId;
        } 
    }
</script>


<style scoped>

    h2 {
        color:  #4E5166;
    }

    .btn-cancel {
        background-color: #E9ECEF;
    }
    
</style>