
//EJERCICIO 4
var nombreInput = document.getElementById('nombre');
var latitudInput = document.getElementById('latitud');
var longitudInput = document.getElementById('longitud');
var agregarMarcadorBtn = document.getElementById('agregarMarcador');


// Evento para el boton
agregarMarcadorBtn.addEventListener('click', function() {
  var nombre = nombreInput.value;
  var latitud = parseFloat(latitudInput.value);
  var longitud = parseFloat(longitudInput.value);

  if (isNaN(latitud) || isNaN(longitud)) {
    alert('Ingresa valores válidos para latitud y longitud.');
    return;
  }

  var marcadorLonLat = new OpenLayers.LonLat(longitud, latitud).transform(
    new OpenLayers.Projection("EPSG:4326"),
    map.getProjectionObject()
  );

  var marcador = new OpenLayers.Marker(marcadorLonLat);
  marcador.events.register('mousedown', marcador, function(evt) {
    var popup = new OpenLayers.Popup("popup",
      marcadorLonLat,
      new OpenLayers.Size(200, 100),
      nombre,true
    );
    map.addPopup(popup);
  });

  markerLayer.addMarker(marcador);
});

//---------------------------------------------------------


//EJERCICIO 1

// Creando un mapa con la capa base
var map = new OpenLayers.Map("map");

// Crear una capa base con OpenStreetMap
var baseLayer = new OpenLayers.Layer.OSM("Capa base de OSM");


map.addLayer(baseLayer);


var lonLat = new OpenLayers.LonLat(2.1734, 41.3851).transform(
  new OpenLayers.Projection("EPSG:4326"),
  map.getProjectionObject()
);
var zoomLevel = 12;


map.setCenter(lonLat, zoomLevel);
//-----------------------------------------

//EJERCICIO 2
//Marcador con las coordenadas usadas
var marker = new OpenLayers.Marker(lonLat);

//capa de marcadores + marcado a capa
var markerLayer = new OpenLayers.Layer.Markers("Marcadores");
markerLayer.addMarker(marker);

map.addLayer(markerLayer);

//------------------------------------------
//EJERCICIO 3
marker.events.register("mousedown", marker, function(evt) {
 
  var popup = new OpenLayers.Popup("popup",
    lonLat,
    new OpenLayers.Size(200, 100),
    "Barcelona",
    true
  );
  map.addPopup(popup);
});


