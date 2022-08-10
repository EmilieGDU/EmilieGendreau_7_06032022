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
                <ul class="navbar-nav">
                    <li class="nav-item mt-3 mt-sm-0 me-sm-3">
                        <router-link to="/admin" class="nav-link text-light">Administrer</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/logout" class="nav-link text-light">Se déconnecter</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
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
    /* .router-link-active {
        color: #FD2D01 !important;
        font-weight: bold;
        font-size: 1.1rem;
    } */
</style>