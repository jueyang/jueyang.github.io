---
layout: default
categories: full
---
<link href='https://api.tiles.mapbox.com/mapbox.js/v2.0.0/mapbox.css' rel='stylesheet' />
<div class='chicago'>
	<h2>Age of Chicago & Its Selected History
		<span>Data from <a href='https://data.cityofchicago.org/Buildings/Building-Footprints/qv97-3bvb'>Chicago City Data Portal</a> and <a href='http://en.wikipedia.org/wiki/History_of_Chicago'>Wikipedia</a></span>
	</h2>
	<div class='map full' id='chicago-map'></div>
</div>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.0.0/mapbox.js'></script>
<script>
L.mapbox.accessToken = 'pk.eyJ1IjoianVlIiwiYSI6InFsakR2UEkifQ.GSsNWZF7HVlLqwdhWuM2gA';
var geocoder = L.mapbox.geocoderControl('mapbox.places-v1');
var map = L.mapbox.map('chicago-map', 'jue.tm2-basemap',{
		minZoom:12,
		maxZoom:16
	}).setView([41.9, -87.62],12)
	.addControl(geocoder);
</script>