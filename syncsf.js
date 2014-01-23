// initialize map
var map = L.mapbox.map('sf-map', 'lyzidiamond.h2jco8hl').setView([37.770986,-122.446457], 13);

function onEachFeature(feature, layer) {
  var popupContent = "<strong>There is a street closure here!</strong>";
  layer.bindPopup(popupContent);
};

var locations =
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Begin": "April 1, 2013",
        "End": "May 2, 2013",
        "Project Name": "Chex Mix Commercial"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.42631912231445,
          37.788352705583755
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Begin": "April 7, 2013",
        "End": "June 24, 2013",
        "Project Name": "New Romantic Comedy"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.41344451904295,
          37.78821704497665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Begin": "February 6, 2010",
        "End": "February 3, 2011",
        "Project Name": "Dateline SF"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.45241165161131,
          37.77261441408201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Begin": "May 12, 2011",
        "End": "May 14, 2011",
        "Project Name": "Coffee Commercial"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.47438430786133,
          37.74682893940135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Begin": "January 2, 2014",
        "End": "January 6, 2014",
        "Project Name": "Some Epic Action Flick"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.41189956665039,
          37.75890851765176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Begin": "August 5, 2012",
        "End": "December 4, 2012",
        "Project Name": "The Longest Film"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.50391006469727,
          37.774106982088796
        ]
      }
    }
  ]
}

var locationsGJ = L.geoJson(locations, {
  onEachFeature: onEachFeature
});

locationsGJ.addTo(map);
map.fitBounds(locationsBounds, {reset: true});