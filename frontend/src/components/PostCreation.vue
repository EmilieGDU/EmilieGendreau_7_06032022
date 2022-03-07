<template>
    <div class="container mt-5">
        <h1>CREATION NOUVEAU POST</h1>
        <div>
            <h2>Créer un Post</h2>
            <form method="" action="">
                <div class="form-group">
                    <label for="title">Titre du Post</label>
                    <input id="title" type="text" class="form-control" v-model="formData.titre" />
                </div>
                <div class="form-group">
                    <label for="txt">Votre texte</label>
                    <textarea id="txt" type="text" class="form-control" v-model="formData.texte" />
                </div>
                <button>Publier</button>
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