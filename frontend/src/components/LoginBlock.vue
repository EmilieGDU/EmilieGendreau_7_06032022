<template>
    <div class="container col-12 col-md-9 w-100">

        <div>
            <h1>S'identifier</h1>

            <p class="lead">{{ citation }}</p>

            <form method="post" v-on:submit.prevent="onLogin">
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
    import AuthService from "../services/auth.service"
    import { setLocalStorage } from "../services/localStorage.service"

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
        },
        methods: {
            goFeed: function() {
                this.$router.push("/feed");
            },
            
            onLogin() {
                AuthService.login(this.formData)
                .then((response) => {                    
                    if (response.data.token) {
                        const userId = response.data.userId;
                        const isAdmin = response.data.isAdmin;
                        const token = response.data.token;
                        
                        setLocalStorage(userId, isAdmin, token);

                        this.formData = {
                            email: "",
                            password:"",
                        }

                        this.goFeed();
                    }

                    return response.data;
                })
                .catch((error) => {
                    if (error.response) { // Get response with a status code not in range 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                    else if (error.request) { // No response
                        console.log(error.request);
                        // Instance of XMLHttpRequest in the Browser
                        // Instance of http.ClientRequest in Node.js
                    }
                    else { // Something wrong in setting up the request
                        console.log("Error : ", error.message);
                    }
                    console.log(error.config);
                });
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