<template>
    <div class="container mt-5">
        <h1>SIGNUP : {{ citation }}</h1>
        <div>
            <h2>S'inscrire</h2>
            <form method="" action="">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" class="form-control" />
                    <br/>
                    <label for="password">Mot de passe (Contraintes retenues pour MDP, ex : 6 caractères minimum)</label>
                    <input id="password" type="password" class="form-control" />
                    <br/>
                    <p>En cliquant sur Accepter et s'inscrire, vous acceptez les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a> de Groupomania.</p>
                    <button>Accepter et s'inscrire</button>
                </div>
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
                    
                }
            }
        }
        
    }
</script>


<style scoped>

</style>