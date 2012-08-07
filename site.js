---
---

{% include js/jquery-1.7.2.min.js %}

var loadMap = function(options) {
    var markerLayer = mapbox.markers.layer().url('http://a.tiles.mapbox.com/v3/' + options.layer + '/markers.geojsonp');
    mapbox.markers.interaction(markerLayer);

    var mapAbout = mapbox.map(options.map, [mapbox.layer().id(options.layer), markerLayer], null, [
            easey_handlers.TouchHandler(),
            easey_handlers.DragHandler(),
            easey_handlers.DoubleClickHandler()
        ]);

        mapAbout.zoom(options.zoom).center({ lat:options.lat, lon:options.lon });
        mapAbout.setZoomRange(options.min,options.max);
};