<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <div>
            <h1>S'inscrire</h1>
            <p class="lead">{{ citation }}</p>
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
    a:hover {
        color: #FD2D01 !important;
        text-decoration: underline;
    }
</style>