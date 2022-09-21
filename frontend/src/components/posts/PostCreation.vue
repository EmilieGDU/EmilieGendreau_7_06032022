<template>
    <div class="container col-12 col-md-9 col-lg-6">
        <h1>CREATION NOUVEAU POST</h1>
        <div>
            <h2>Créer un Post</h2>
            <form method="post" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="title" class="form-label">Titre du Post</label>
                    <input id="title" type="text" name="postTitle" class="form-control" v-model="formData.title" />
                </div>
                <div class="mb-3">
                    <label for="text" class="form-label">Votre texte</label>
                    <textarea id="text" name="postBody" class="form-control" rows="3" v-model="formData.body" placeholder="Que souhaitez-vous partager aujourd'hui ?"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Votre fichier</label>
                    <!-- <input id="formFile" type="file" class="form-control" v-model="formData.attachment" /> -->
                    <input id="formFile" type="file" name="postAttachment" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary fw-bold my-3 w-100">Publier</button>
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
        }
    }
</script>


<style>

</style>