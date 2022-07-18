<template>
    <div class="container-fluid bg-dark mt-5 py-2">
        <div class="row">
            <p class="col-12 text-light text-center mt-2">
                <img src="../assets/icon-left-font-monochrome-white-resized-150x32.png" alt="Logo de l'entreprise Groupomania" />
                &copy; 2022
            </p>
            <ul class="col-12 text-center list-unstyled list-inline"> 
                <li class="list-inline-item my-2 mx-2 mx-md-3 mx-lg-5"><a href="#" class="text-light text-decoration-none" data-bs-toggle="modal" data-bs-target="#termsOfService">Conditions générales d'utilisation</a></li>
                <li class="list-inline-item my-2 mx-2 mx-md-3 mx-lg-5"><a href="#" class="text-light text-decoration-none" data-bs-toggle="modal" data-bs-target="#legalNotice">Mentions légales</a></li>
                <li class="list-inline-item my-2 mx-2 mx-md-3 mx-lg-5"><a href="#" class="text-light text-decoration-none" data-bs-toggle="modal" data-bs-target="#privacyPolicy">Politique de confidentialité</a></li>
            </ul>
        </div>
        
        <!-- Modals -->
        <div class="modal fade" id="termsOfService" tabindex="-1" aria-labelledby="termsOfServiceLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="termsOfServiceLabel">Conditions générales d'utilisation</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dapibus urna. Sed sed neque elementum, convallis elit ut, malesuada eros. Suspendisse feugiat dolor ac ultrices lobortis. Donec malesuada urna vel tincidunt dapibus. Integer condimentum ante augue, quis euismod nisi condimentum non. In vitae eleifend elit. Maecenas varius viverra ante in porttitor.</p>
                        <p>Suspendisse sed tempor erat, ut luctus tellus. Cras quis placerat metus, nec interdum nunc. Phasellus a tellus malesuada odio auctor faucibus. Suspendisse auctor hendrerit congue. In id lorem ipsum. Sed tincidunt luctus leo, eget sagittis sapien aliquam nec. Pellentesque vitae risus non enim consectetur gravida et at diam.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="legalNotice" tabindex="-1" aria-labelledby="legalNoticeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="legalNoticeLabel">Mentions légales</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Sed egestas commodo massa sit amet aliquam. Ut facilisis massa non urna mollis egestas. Quisque vitae laoreet augue. Donec nunc enim, tincidunt eu pulvinar eget, dictum eget quam. Quisque tortor lorem, lobortis a vestibulum at, blandit sit amet dui. Etiam at tincidunt nibh. Mauris eu erat urna. Integer ex purus, ornare sed sollicitudin hendrerit, tristique sit amet turpis.</p>
                        <p>Vestibulum efficitur pulvinar nisi, quis vestibulum libero facilisis blandit. Donec interdum, diam eu volutpat eleifend, sem leo lobortis tellus, et rutrum leo orci a est. Quisque nec mattis ligula, non mollis diam. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="privacyPolicy" tabindex="-1" aria-labelledby="privacyPolicyLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="privacyPolicyLabel">Politique de confidentialité</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Integer quis enim a neque hendrerit efficitur. Morbi vitae massa nisi. Vivamus congue semper odio, sed cursus ante dignissim non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque commodo nec tortor sit amet placerat.</p>
                        <p>Aenean eu lorem in nunc scelerisque faucibus. Integer ultrices libero quis consequat cursus. Duis placerat urna vel lectus euismod, et tincidunt erat lacinia. Ut efficitur felis eget cursus aliquet. Vestibulum quam dolor, ultrices a dui a, ornare consequat justo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "FooterBlock",
        data() {
            return {
                
            }
        }
    }
</script>


<style scoped>

</style>