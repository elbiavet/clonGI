
// detectar el evento scroll y llamar a función
$(window).on('scroll', moverBarra);
    function moverBarra(){

		//asignar a variables el valor del scroll, la altura del body y de la ventana.
		var scrollRealizado = $(window).scrollTop();
		var alturaBody = $('body').innerHeight();
		var alturaVentana = $(window).innerHeight();

        // obtener la zona en la que se hace scroll restando las variables que acabo de declarar
		var zonaScroleable = alturaBody - alturaVentana;

		//obtener el porcentaje de scroll realizado
		var porcentajeScroll = scrollRealizado / zonaScroleable * 100;
		
        //uso el método css para modifciar el ancho de la barra de progreso segun el procentaje obtenido
	    $('#progreso').css('width', porcentajeScroll + '%');

	}
