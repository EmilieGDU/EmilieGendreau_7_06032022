<template>
    
    <header>
        <!-- Navbar -->
        <!-- Adding a role="navigation" for assistive technology users -->
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3" role="navigation">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/icon-left-font-resized-removebg-159x35.png" alt="Logo de l'entreprise Groupomania" />
                </router-link>
                
                <!-- Navigation toggle button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toogle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbarContent" class="collapse navbar-collapse justify-content-end">
                    <!-- Header displayed when not logged -->
                    <ul v-if="!user" class="navbar-nav">
                        <li class="nav-item mt-3 mt-sm-0 me-sm-3">
                            <!-- <router-link to="/signup" class="nav-link text-light">S'inscrire</router-link> is the same as the link below : -->
                            <router-link v-bind:to="{ name: 'Signup' }" class="nav-link text-light">S'inscrire</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link text-light">S'identifier</router-link>
                        </li>
                    </ul>
                    <!-- Header displayed when logged in -->
                    <ul v-else-if="user" class="navbar-nav">
                        <li class="nav-item mt-3 mt-sm-0 me-sm-3">
                            <router-link to="/feed" class="nav-link text-light">Fil d'actualité</router-link>
                        </li>
                        <li class="nav-item me-sm-3">
                            <router-link to="/profile" class="nav-link text-light">Mon profil</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/logout" class="nav-link text-light" v-on:click="logoutUser">Se déconnecter</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>


<script>
    export default {
        name: "HeaderBlock",
        props: ["user"],
        methods: {
            logoutUser() {
                this.$emit('logoutUser');
            }
        }
    }
</script>


<style scoped>
    
</style>