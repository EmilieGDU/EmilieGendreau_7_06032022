<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h2>Une carte "User"</h2>
        
        <div class="card shadow" style="max-width: 540px;">
            <div class="row g-0">
                <!-- Img_100px when dimensions < 768px (md breakpoint) -->
                <div class="col-md-4 my-md-auto text-center">
                    <img src="../assets/default_img_100px.png" class="card-body rounded-2 img-fluid" alt="Photo de profil de l'utilisateur">
                </div>
                <!-- Img_180px when dimensions >= 768px (md breakpoint) -->
                <!-- <div class="col-md-4 my-md-auto text-center">
                    <img src="../assets/default_img_180px.png" class="card-body rounded-2 img-fluid" alt="Photo de profil de l'utilisateur">
                </div> -->
                <div class="col-md-8 mt-sm-2 mt-md-3">
                    <div class="card-body">
                        <h3 class="card-title mb-2 mb-md-3">John DOE</h3>
                        <p class="card-text"><strong>E-mail : </strong>john.doe@email.com</p>
                    </div>
                </div>
            </div>
            <!-- <button type="submit" class="btn btn-primary fw-bold mx-auto me-md-4 my-3 col-11 col-md-7">Supprimer l'utilisateur</button> -->
            <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary fw-bold mx-2 my-3 col-5">Contacter</button>
                <button type="submit" class="btn btn-primary fw-bold mx-2 my-3 col-5">Supprimer</button>
            </div>
        </div>        
    </div>  
</template>


<script>
    export default {
        name: "UserCard",
        data() {
            return {

            }
        }        
    }
</script>


<style scoped>

</style>