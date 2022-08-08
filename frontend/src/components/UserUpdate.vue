<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h1>MISE A JOUR DE VOTRE COMPTE UTILISATEUR</h1>
        <div>
            <h2>Modifiez vos données personnelles</h2>
            <form method="" action="" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="email" class="form-label">Votre e-mail</label>
                    <input id="email" type="email" class="form-control" v-model="formData.email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Votre mot de passe</label>
                    <input id="password" type="password" class="form-control" v-model="formData.password" />
                </div>
                <div class="mb-3">
                    <label for="firstName" class="form-label">Votre prénom</label>
                    <input id="firstName" type="text" class="form-control" v-model="formData.firstName" />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Votre nom</label>
                    <input id="lastName" type="text" class="form-control" v-model="formData.lastName" />
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Votre photo de profil</label>
                    <input id="formFile" type="file" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary fw-bold my-3 w-100">Mettre à jour</button>
            </form>
        </div>
    </div>      
</template>


<script>
    export default {
        name: "UserUpdate",
        data() {
            return {
                formData: {
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: ""
                }
            }
        }
    }
</script>


<style>

</style>