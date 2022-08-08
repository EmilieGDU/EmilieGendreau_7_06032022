<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h1>LOGIN USER : {{ citation }}</h1>
        <div>
            <h2>S'identifier</h2>
            <p class="lead">Prenez connaissance des dernières publications de votre entourage professionnel</p>
            <form method="" action="">
                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input id="email" type="email" class="form-control" v-model="formData.email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Mot de passe</label>
                    <input id="password" type="password" class="form-control" v-model="formData.password" />
                </div>
                <button type="submit" class="btn btn-primary fw-bold my-3 w-100">S'identifier</button>                
            </form>
        </div>

        <hr />

        <p class="text-center">
            Vous débutez sur Groupomania ? 
            <a href="#">S'inscrire</a>
        </p>
    </div>    
</template>


<script>
    export default {
        name: "LoginUser",
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