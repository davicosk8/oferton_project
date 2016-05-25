var serviceURL = "http://servicesphp.esy.es/";

var ofertas;

$('#ofertasPage').on('pageinit', function(event) {
	var id = getUrlVars()["idc"];
	$.getJSON(serviceURL + 'getofertasporcategoriaid.php?idc=' + id, getofertasporcategoriaid);
});

function getofertasporcategoriaid(data) {
		ofertas = data.items;
		$.each(ofertas, function(index, oferta) {
			$('#ofertasList').append(
			'<li data-icon="false">'+
				'<a href="detalleoferta.html?id='+oferta.ofertaid+'" rel="external">'+
					'<img src="img/'+oferta.ofertaimagen+'" />'+
					'<h2 id="tituloofertadelista">'+oferta.ofertanombre+'</h2>'+
					'<h1 id="hastaofertadelista">Hasta:</h1>'+
					'<p id="fechafinofertadelista">'+oferta.ofertafechafin+'</p>'+
					'<p class="ui-li-aside">'+oferta.empresanombre+'</p>'+
				'</a>'+
			'</li>'
			);
		});
		$('#ofertasList').listview('refresh');
}


function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}