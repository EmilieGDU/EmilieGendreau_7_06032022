<template>
    <div>

        <a href="#" class="far" aria-label="Go on top of the page">
            <font-awesome-icon icon="fa-regular fa-circle-up" class="text-tertiary" size="3x"></font-awesome-icon>
        </a>

    </div>
</template>


<script>
    export default {
        name: "GoOnTop"
    }
</script>


<style scoped>

    .far {
        position: fixed;
        right: 20px;
        bottom: 225px;
        color: #BECCC2;
    }
    
</style>