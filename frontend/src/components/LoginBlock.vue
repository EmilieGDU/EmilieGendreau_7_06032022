<template>
    <div class="container mt-5">
        <h1>LOGIN : {{ citation }}</h1>
        <div>
            <h2>S'identifier</h2>
            <p>Prenez connaissance des dernières publications de votre entourage professionnel</p>
            <form method="" action="">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input id="password" type="password" class="form-control" />
                </div>
                <button>S'identifier</button>                
            </form>
        </div>
        <p>
            Vous débutez sur Groupomania ? 
            <a href="#">S'inscrire</a>
        </p>
    </div>    
</template>


<script>
    export default {
        name: "LoginBlock",
        data() {
            return {
                citation: "Bienvenue dans votre communauté d'entreprise",
                formData: {
                    
                }
            }
        }        
    }
</script>


<style scoped>

</style>