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
                console.log("****************")
                console.log("LOGINBLOCK / ONLOGIN / IF RESPONSE.DATA.TOKEN ==> GO FEED")
                console.log("****************")
                this.$router.push("/feed");
            },
            
            onLogin() {
                console.log("####################################################################################################");
                console.log("LOGIN(THIS.FORMDATA) DEPUIS LOGINBLOCK / THIS.FORMDATA.EMAIL : ", this.formData.email);
                console.log("####################################################################################################");
                AuthService.login(this.formData)
                .then((response) => {
                    console.log("####################################################################################################");
                    console.log("ONLOGIN/RESPONSE DEPUIS LOGINBLOCK / RESPONSE.DATA : ", response.data);
                    console.log("ONLOGIN/RESPONSE DEPUIS LOGINBLOCK / JSON.STRINGIFY(RESPONSE.DATA) : ", JSON.stringify(response.data));
                    console.log("ONLOGIN/RESPONSE DEPUIS LOGINBLOCK / RESPONSE.DATA.MESSAGE : ", response.data.message);
                    console.log("ONLOGIN/RESPONSE DEPUIS LOGINBLOCK / RESPONSE.DATA.USERID : ", response.data.userId);
                    console.log("ONLOGIN/RESPONSE DEPUIS LOGINBLOCK / RESPONSE.DATA.TOKEN : ", response.data.token);
                    console.log("####################################################################################################");
                    
                    if (response.data.token) {
                        const user = { userId: response.data.userId, token: response.data.token };
                        console.log("+++++++++++++++++++++++++++++++++");
                        console.log("USER pour LOCALSTORAGE = ", user);
                        console.log("+++++++++++++++++++++++++++++++++");
                        localStorage.setItem("user", JSON.stringify(user));
                        //localStorage.setItem("user", JSON.stringify(response.data));

                        this.formData = {
                            email: "",
                            password:"",
                        }
                        console.log("###############################################################");
                        console.log("THIS.FORMDATA APRES CLEAR LOGINBLOCK/ONLOGIN : ", this.formData);
                        console.log("###############################################################");

                        this.goFeed();
                    }

                    // this.formData = {
                    //     email: "",
                    //     password:"",
                    // }
                    // console.log("###############################################################");
                    // console.log("THIS.FORMDATA APRES CLEAR LOGINBLOCK/ONLOGIN : ", this.formData);
                    // console.log("###############################################################");

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