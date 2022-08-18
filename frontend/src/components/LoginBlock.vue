<template>
    <div class="container col-12 col-md-9 w-100">
        <div>
            <h1>S'identifier</h1>
            <p class="lead">{{ citation }}</p>
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
            <router-link to="/signup">S'inscrire</router-link>
        </p>
    </div>    
</template>


<script>
    export default {
        name: "LoginBlock",
        data() {
            return {
                citation: "Prenez connaissance des dernières publications de votre entourage professionnel",
                formData: {
                    email: "",
                    password: ""
                }
            }
        }        
    }
</script>


<style scoped>
    a:hover {
        color: #FD2D01 !important;
        text-decoration: underline;
    }
</style>