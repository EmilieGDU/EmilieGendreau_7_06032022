<template>
    <!-- Navbar -->
    <!-- Adding a role="navigation" for assistive technology users -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" role="navigation">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/icon-left-font-resized-removebg-159x35.png" alt="Logo de l'entreprise Groupomania" />
            </router-link>
            <!-- Navigation toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toogle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav nav-pills">
                    <li class="nav-item mt-3 mt-sm-0 me-sm-3">
                        <router-link to="/profile" class="nav-link text-light active px-3" aria-current="page">Mon profil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-light">Se déconnecter</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
</template>


<script>
    export default {
        name: "NavbarUser",
        data() {
            return {
                
            }
        }
    }
</script>


<style scoped>

</style>