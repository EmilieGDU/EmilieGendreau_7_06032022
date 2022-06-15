<template>
    <div class="container mt-5">
        <h1>SIGNUP : {{ citation }}</h1>
        <div>
            <h2>S'inscrire</h2>
            <form method="" action="">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" class="form-control" v-model="formData.email" />
                </div>
                <div class="form-group mt-2">
                    <label for="password">Mot de passe (Le mot de passe doit contenir entre 8 et 20 caractères, au minimum 1 majuscule et 2 chiffres, et ne comporter aucun espace.)</label>
                    <input id="password" type="password" class="form-control" v-model="formData.password" />
                </div>
                <p class="text-muted mt-2">En cliquant sur Accepter et s'inscrire, vous acceptez les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a> de Groupomania.</p>
                <button class="btn btn-primary my-3">Accepter et s'inscrire</button>
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