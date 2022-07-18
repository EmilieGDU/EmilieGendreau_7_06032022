<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h1>CREATION NOUVEAU POST</h1>
        <div>
            <h2>Créer un Post</h2>
            <form method="" action="">
                <div class="mb-3">
                    <label for="title" class="form-label">Titre du Post</label>
                    <input id="title" type="text" class="form-control" v-model="formData.titre" />
                </div>
                <div class="mb-3">
                    <label for="txt" class="form-label">Votre texte</label>
                    <textarea id="txt" class="form-control" rows="3" v-model="formData.texte" placeholder="Que souhaitez-vous partager aujourd'hui ?"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Votre fichier</label>
                    <input id="formFile" type="file" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary my-3">Publier</button>
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
                    titre: "",
                    texte: "" 
                }
            }
        }
    }
</script>


<style>

</style>