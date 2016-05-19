var serviceURL = "http://localhost/oferton_services/";

var sucursales;

$('#detallePage').on('pageinit', function(event) {
	var id = getUrlVars()["id"];
    var ide= getUrlVars()["ide"];
	$.getJSON(serviceURL + 'getdetalleoferta.php?id='+id, displayDetalle);
    $.getJSON(serviceURL + 'getsucursalesporoferta.php?ide='+ide, displaySucursales);
});

function displayDetalle(data) {
	var oferta = data.item;

	$('#nombre').text(oferta.ofertanombre);
	$('#descripcion').text(oferta.ofertadescripcion);
	$('#fechainicio').text(oferta.ofertafechainicio);
    $('#fechafin').text(oferta.ofertafechafin);
}

function displaySucursales(data){
        sucursales = data.items;
        $.each(sucursales, function(index, sucursal) {
            $('#sucursalesList').append(
                    '<li>'+
                        '<p>'+sucursal.sucursalnombre+'</p>'+
                        '<p>'+sucursal.sucursaldireccion+'</p>'+
                        '<p>'+sucursal.sucursaltelefono1+'</p>'+
                    '</li>'
                );
        });

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
