<template>
    <div class="container mt-5">
        <h1>LOGIN : {{ citation }}</h1>
        <div>
            <h2>S'identifier</h2>
            <p class="lead">Prenez connaissance des dernières publications de votre entourage professionnel</p>
            <form method="" action="">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" class="form-control" v-model="formData.email" />
                </div>
                <div class="form-group mt-2">
                    <label for="password">Mot de passe</label>
                    <input id="password" type="password" class="form-control" v-model="formData.password" />
                </div>
                <button class="btn btn-primary my-3">S'identifier</button>                
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
                    email: "",
                    password: ""
                }
            }
        }        
    }
</script>


<style scoped>

</style>