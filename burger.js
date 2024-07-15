$(document).ready(function() {
    // Mostrar u ocultar el menú al hacer clic en el botón de hamburguesa
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('show');
    });

    // Ocultar el menú si se hace clic fuera de él
    $(document).click(function(e) {
        if (!$(e.target).closest('.navbar-collapse').length && !$(e.target).closest('.navbar-toggler').length) {
            $('.navbar-collapse').removeClass('show');
        }
    });
});