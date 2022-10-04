<template>
    <div class="container col-12 col-md-9">
        <div>
            <h1>S'inscrire</h1>
            <p class="lead">{{ citation }}</p>
            <form method="post" v-on:submit.prevent="onSignup">
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
                    <p class="text-muted text-center">En cliquant sur Accepter et s'inscrire, vous acceptez les <a href="#" data-bs-toggle="modal" data-bs-target="#termsOfService">Conditions d'utilisation</a> et la <a href="#" data-bs-toggle="modal" data-bs-target="#privacyPolicy">Politique de confidentialité</a> de Groupomania.</p>
                </div>
                <button type="submit" class="btn btn-primary fw-bold my-3 w-100">Accepter et s'inscrire</button>
            </form>
        </div>

        <hr />

        <p class="text-center">
            Déjà inscrit(e) ? 
            <router-link to="/login">S'identifier</router-link>
        </p>
        
        <!-- Modals -->
        <div class="modal fade" id="termsOfService" tabindex="-1" aria-labelledby="termsOfServiceLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="termsOfServiceLabel">Conditions générales d'utilisation</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dapibus urna. Sed sed neque elementum, convallis elit ut, malesuada eros. Suspendisse feugiat dolor ac ultrices lobortis. Donec malesuada urna vel tincidunt dapibus. Integer condimentum ante augue, quis euismod nisi condimentum non. In vitae eleifend elit. Maecenas varius viverra ante in porttitor.</p>
                        <p>Suspendisse sed tempor erat, ut luctus tellus. Cras quis placerat metus, nec interdum nunc. Phasellus a tellus malesuada odio auctor faucibus. Suspendisse auctor hendrerit congue. In id lorem ipsum. Sed tincidunt luctus leo, eget sagittis sapien aliquam nec. Pellentesque vitae risus non enim consectetur gravida et at diam.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="privacyPolicy" tabindex="-1" aria-labelledby="privacyPolicyLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="privacyPolicyLabel">Politique de confidentialité</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Integer quis enim a neque hendrerit efficitur. Morbi vitae massa nisi. Vivamus congue semper odio, sed cursus ante dignissim non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque commodo nec tortor sit amet placerat.</p>
                        <p>Aenean eu lorem in nunc scelerisque faucibus. Integer ultrices libero quis consequat cursus. Duis placerat urna vel lectus euismod, et tincidunt erat lacinia. Ut efficitur felis eget cursus aliquet. Vestibulum quam dolor, ultrices a dui a, ornare consequat justo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>


<script>
    import AuthService from "../services/auth.service"    
    import { setLocalStorage } from "../services/localStorage.service"

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
        },
        methods: {
            goFeed: function() {
                console.log("****************")
                console.log("SIGNUPBLOCK / ONSIGNUP / IF RESPONSE.DATA.DATA.TOKEN ==> GO FEED")
                console.log("****************")
                this.$router.push("/feed");
            },

            onSignup() {
                console.log("####################################################################################################");
                console.log("SIGNUP(THIS.FORMDATA) DEPUIS SIGNUPBLOCK / THIS.FORMDATA : ", this.formData);
                console.log("####################################################################################################");
                AuthService.signup(this.formData)
                .then((response) => {
                    console.log("####################################################################################################");
                    console.log("ONSIGNUP/RESPONSE DEPUIS SIGNUPBLOCK / RESPONSE.DATA : ", response.data);
                    console.log("ONSIGNUP/RESPONSE DEPUIS SIGNUPBLOCK / RESPONSE.DATA.MESSAGE : ", response.data.message);
                    console.log("ONSIGNUP/RESPONSE DEPUIS SIGNUPBLOCK / RESPONSE.DATA.DATA : ", response.data.data);
                    console.log("ONSIGNUP/RESPONSE DEPUIS SIGNUPBLOCK / RESPONSE.DATA.DATA.USER : ", response.data.data.user);
                    console.log("ONSIGNUP/RESPONSE DEPUIS SIGNUPBLOCK / RESPONSE.DATA.DATA.TOKEN : ", response.data.data.token);
                    console.log("####################################################################################################");

                    if (response.data.data.token) {
                        const userId = response.data.data.user.id;
                        const isAdmin = response.data.data.user.isAdmin;
                        const token = response.data.data.token;
                        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                        console.log("ONSIGNUP DEPUIS SIGNUPBLOCK  - L100 / USER pour LOCALSTORAGE = USERID : ", userId);
                        console.log("ONSIGNUP DEPUIS SIGNUPBLOCK  - L101 / USER pour LOCALSTORAGE = ISADMIN : ", isAdmin);
                        console.log("ONSIGNUP DEPUIS SIGNUPBLOCK  - L102 / USER pour LOCALSTORAGE = TOKEN : ", token);
                        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                        
                        setLocalStorage(userId, isAdmin, token);

                        this.formData = {
                            email: "",
                            password:"",
                        }
                        console.log("##################################################################");
                        console.log("THIS.FORMDATA APRES CLEAR SIGNUPBLOCK/ONSIGNUP : ", this.formData);
                        console.log("##################################################################");
                        
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