<template>
    <div class="container col-12 col-md-9 col-lg-6">
        <h1>CREATION NOUVEAU COMMENTAIRE</h1>
        <div>
            <h2>Créer un Commentaire</h2>
            <form method="post">
                <div class="mb-3">
                    <label for="text" class="form-label">Votre commentaire</label>
                    <textarea id="text" name="comment" class="form-control" rows="3" v-model="formData.comment" placeholder="Ajouter un commentaire..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary fw-bold my-3 w-100">Publier</button>
            </form>
        </div>
    </div>      
</template>


<script>
    export default {
        name: "CommentCreation",
        data() {
            return {
                formData: {
                    comment: "",
                }
            }
        }
    }
</script>


<style>

</style>