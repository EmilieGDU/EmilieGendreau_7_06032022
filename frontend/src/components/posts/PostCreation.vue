<template>
    <div class="w-100">
        <h1>CREATION NOUVEAU POST</h1>
        <div>
            <h2>Créer un Post</h2>
            <form method="post" v-on:submit.prevent="onCreatePost" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="title" class="form-label">Titre du Post</label>
                    <input id="title" type="text" name="postTitle" class="form-control" v-model="formData.title" placeholder="Que souhaitez-vous partager ?"/>
                </div>
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
                        <button class="btn btn-cancel fw-bold p-2 w-75" v-on:click="onCancelPost">Annuler</button>
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
        name: "PostCreation",
        data() {
            return {
                formData: {
                    title: "",
                    body: "",
                    //attachment: ""
                }
            }
        },
        methods: {
            onCancelPost() {
                this.formData.title = "";
                this.formData.body = "";
            },
            onCreatePost() {
                
            },
            
        }
    }
</script>


<style scoped>

    .btn-cancel {
        background-color: #E9ECEF;
    }

</style>