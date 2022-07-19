<template>
    <!-- A ADAPTER POUR RENDRE LA MODALE GENERIQUE -->
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
</template>


<script>
    export default {
        name: "Modal",
        data() {
            return {
                
            }
        }
    }
</script>


<style scoped>

</style>