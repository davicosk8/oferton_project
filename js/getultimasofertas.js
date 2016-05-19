var serviceURL = "http://localhost/oferton_services/";

var ultimasofertas;

$('#ulimasofertasPage').on('pageinit', function(event) {
	getultimasofertas();
});

function getultimasofertas() {
	$.getJSON(serviceURL + 'getultimasofertas.php', function(data) {
		ultimasofertas = data.items;
		$.each(ultimasofertas, function(index, ofertas) {
			$('#ultimasofertasList').append(
			'<li data-icon="false">'+
				'<a href="detalleoferta.html?id='+ofertas.ofertaid+'" id="objetodelistanovedades" rel="external">'+
					'<img src="img/'+ofertas.ofertaimagen+'"/>'+
					'<h4 id="tituloofertadelista">'+ofertas.ofertanombre+'</h4>'+
					'<h6 id="hastaofertadelista">Hasta:</h6>'+
					'<p id="fechafinofertadelista">'+ofertas.ofertafechafin+'</p>'+
					'<p class="ui-li-aside">'+ofertas.empresanombre+'</p>'+
				'</a>'+
			'</li>'
			);
		});
		$('#ultimasofertasList').listview('refresh');
	});
}



