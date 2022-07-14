<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h1>CREATION NOUVEAU POST</h1>
        <div>
            <h2>Créer un Post</h2>
            <form method="" action="">
                <div class="form-group">
                    <label for="title">Titre du Post</label>
                    <input id="title" type="text" class="form-control" v-model="formData.titre" />
                </div>
                <div class="form-group mt-2">
                    <label for="txt">Votre texte</label>
                    <textarea id="txt" type="text" class="form-control" v-model="formData.texte" placeholder="Que souhaitez-vous partager aujourd'hui ?"></textarea>
                </div>
                <button class="btn btn-primary my-3" type="submit">Publier</button>
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