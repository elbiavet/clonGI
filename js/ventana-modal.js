/* mostrar y ocultar ventana modal */

/* abrir la ventana Modal */
$(".leerClausulas").on("click", function(){
    $('.fondoModal').fadeIn(1000, function(){
        $('.contenidoModal').fadeIn(300);
    });
});

/* cerrar la ventana Modal */
$(".cerrarModal").on("click", function(){
    $(".fondoModal, .contenidoModal").fadeOut(300);
});