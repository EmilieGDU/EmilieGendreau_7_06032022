<template>
    <!-- Navbar -->
    <!-- Adding a role="navigation" to the div to explicitly identify it as a landmark region for users of assistive technologies -->
    <div class="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/icon-left-font-resized-removebg-159x35.png" alt="Logo de l'entreprise Groupomania" />
            </a>
            <!-- Navigation toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toogle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav nav-pills">
                    <li class="nav-item mt-3 mt-sm-0 me-sm-3">
                        <a class="nav-link text-light active px-3" aria-current="page" href="#">Administrer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Se déconnecter</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>


<script>
    export default {
        name: "NavbarAdmin",
        data() {
            return {
                
            }
        }
    }
</script>


<style scoped>

</style>