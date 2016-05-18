var serviceURL = "http://localhost/oferton_services/";

$('#detallePage').on('pageinit', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getdetalleoferta.php?id='+id, displayDetalle);
});

function displayDetalle(data) {
	var oferta = data.item;

	$('#id').text(oferta.id);
	$('#nombre').text(oferta.nombre);
	$('#descripcion').text(oferta.descripcion);
	$('#fechainicio').text(oferta.fecha_inicio);
    $('#fechafin').text(oferta.fecha_fin);
    $('#telefono').text(oferta.telefono_encargado);
    $('#email').text(oferta.email_encargado);
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
