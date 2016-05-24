var serviceURL = "http://servicesphp.esy.es/";

var sucursales;
var imagenes;
var map;

$('#detallePage').on('pageinit', function(event) {
    var id = getUrlVars()["id"];
    $.getJSON(serviceURL + 'getdetalleoferta.php?id=' + id, displayDetalle);
    $.getJSON(serviceURL + 'getsucursalesporoferta.php?ide=' + id, displaySucursales);
    $.getJSON(serviceURL + 'getimagenesporoferta.php?ido=' + id, displayImagenes);
});

function displayDetalle(data) {
    var oferta = data.item;

    $('#nombre').text(oferta.ofertanombre);
    $('#descripcion').text(oferta.ofertadescripcion);
    $('#fechainicio').text(oferta.ofertafechainicio);
    $('#fechafin').text(oferta.ofertafechafin);
}

function displaySucursales(data) {
    sucursales = data.items;
    $(document).ready(function() {
        /*cargamos y metemos marcadores al mapa*/
        map = new GMaps({
            el: '#map',
            lat: -17.783412,
            lng: -63.182052,
            zoom: 13,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false
        });
        /*por cada sucursal que exista metemos marcadores al mapa*/
        $.each(sucursales, function(index, sucursal) {
            map.addMarker({
                lat: sucursal.sucursalposX,
                lng: sucursal.sucursalposY,
                title: sucursal.sucursalnombre,
                infoWindow: {
                    content: '<h4>' + sucursal.sucursalnombre + '</h4>' + '<p>' + sucursal.sucursaldireccion + '</p>'
                }
            });
        });



    });
}

function displayImagenes(data) {
    imagenes = data.items;
    $(document).ready(function() {
        //initialize swiper when document ready  
        $.each(imagenes, function(index, imagen) {
            $('#imagen').append(
                '<div class="swiper-slide"><img src=img/' + imagen.imagendir + ' class="imagenoferta"></div>'
            );
        });

    });
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: true
    })
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