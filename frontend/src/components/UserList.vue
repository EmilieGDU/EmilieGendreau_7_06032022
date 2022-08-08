<template>
    <div class="container col-12 col-md-9 col-xl-6 mt-5">
        <h2>La liste des utilisateurs</h2>
        <p class="text-muted"><em>Affichage dans l'ordre alphabétique</em></p>
        <ul>
            <li v-for="(user, index) in users" v-bind:key="index"> {{ user }} </li>
        </ul>
    </div>    
</template>


<script>
    export default {
        name: "UserList",
        data() {
            return {
                users: ["User A", "User B", "User C"]
            }
        }        
    }
</script>


<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>