var serviceURL = "http://servicesphp.esy.es/";

var categorias;

$('#categoriasPage').on('pageinit', function(event) {
	getultimasofertas();
});

function getultimasofertas() {
	$.getJSON(serviceURL + 'getcategorias.php', function(data) {
		categorias = data.items;
		$.each(categorias, function(index, categoria) {
			$('#categoriasList').append(
			'<li data-icon="false">'+
				'<a href="ofertasporcategoria.html?idc='+categoria.id+'" rel="external">'+
					'<h4 id="tituloofertadelista">'+categoria.nombre+'</h4>'+
				'</a>'+
			'</li>'
			);
		});
		$('#categoriasList').listview('refresh');
	});
}



