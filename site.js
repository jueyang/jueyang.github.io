---
---

{% include js/jquery-1.8.0.min.js %}
{% include js/lettering.js %}

var loadMap = function(options) {
    var markerLayer = mapbox.markers.layer().url('http://a.tiles.mapbox.com/v3/' + options.layer + '/markers.geojsonp');
    mapbox.markers.interaction(markerLayer);

    var heyMaps = mapbox.map(options.map, [mapbox.layer().id(options.layer), markerLayer], null, [
            easey_handlers.TouchHandler(),
            easey_handlers.DragHandler(),
            easey_handlers.DoubleClickHandler()
        ]);

        heyMaps.zoom(options.zoom).center({ lat:options.lat, lon:options.lon });
        heyMaps.setZoomRange(options.min,options.max);
};

var smallScreen = function() {
    return($(window).width()<=645)
};