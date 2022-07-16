<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h1>SIGNUP : {{ citation }}</h1>
        <div>
            <h2>S'inscrire</h2>
            <form method="" action="">
                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input id="email" type="email" class="form-control" v-model="formData.email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Mot de passe</label>
                    <input id="password" type="password" class="form-control" aria-describedby="passwordHelp" v-model="formData.password" />
                    <div id="passwordHelp" class="form-text">
                        Votre mot de passe doit comporter entre 8 et 20 caractères, contenir au minimum 1 majuscule et 2 chiffres et ne doit contenir aucun espace.
                    </div>
                </div>
                <div class="mb-3">
                    <p class="text-muted">En cliquant sur Accepter et s'inscrire, vous acceptez les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a> de Groupomania.</p>
                </div>
                <button type="submit" class="btn btn-primary my-3">Accepter et s'inscrire</button>
            </form>
        </div>
        <p>
            Déjà inscrit(e) ? 
            <a href="#">S'identifier</a>
        </p>
    </div>    
</template>


<script>
    export default {
        name: "SignupBlock",
        data() {
            return {
                citation: "(Re)découvrez vos collègues",
                formData: {
                    email: "",
                    password: ""
                }
            }
        }
        
    }
</script>


<style scoped>

</style>