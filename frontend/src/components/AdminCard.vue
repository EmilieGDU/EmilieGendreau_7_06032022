<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h2>Une carte "Admin"</h2>
        
        <div class="card shadow" style="max-width: 540px;">
            <div class="row g-0">
                <!-- Img_100px when dimensions < 768px (md breakpoint) -->
                <div class="col-md-4 my-md-auto text-center">
                    <img src="../assets/admin_100px.png" class="card-body rounded-2 img-fluid" alt="Photo de profil de l'administrateur">
                </div>
                <!-- Img_180px when dimensions >= 768px (md breakpoint) -->
                <!-- <div class="col-md-4 my-md-auto text-center">
                    <img src="../assets/admin_180px.png" class="card-body rounded-2 img-fluid" alt="Photo de profil de l'administrateur">
                </div> -->
                <div class="col-md-8 mt-sm-2 mt-md-3">
                    <div class="card-body">
                        <h3 class="card-title mb-2 mb-md-3">Administrateur</h3>
                        <p class="card-text"><strong>E-mail : </strong>admin@groupomania.com</p>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary fw-bold mx-2 my-3 col-11">Contacter</button>
            </div>
        </div>        
    </div>  
</template>


<script>
    export default {
        name: "AdminCard",
        data() {
            return {

            }
        }        
    }
</script>


<style scoped>

</style>