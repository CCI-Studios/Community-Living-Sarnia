(function($){
  var map;
  var infoWindows = [];
  var $container;
  
  createMap();
  createMarker();
  
  function createMap()
  {
    var location = getMapCenterLatLng();
    var mapOptions = {
      zoom: 13,
      center: location,
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false,
      styles: getMapStyle()
    };
    $container = $(".block--contact-map");
    map = new google.maps.Map($container.get(0),mapOptions);
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  }
  function getMapCenterLatLng()
  {
    return new google.maps.LatLng(42.9870422, -82.3726568);
  }
  function createMarker()
  {
    showMarkerLatLng({lat:42.9890084,lng:-82.389485}, "<div class='location location-green'><h2>Job Path</h2><p>660 Oakdale Avenue,<br>Sarnia, ON<br>N7V 2A9<br>519-332-4004</p></div>");
    showMarkerLatLng({lat:42.9850422,lng:-82.3866568}, "<div class='location location-blue'><h2>Community Living</h2><p>551 Exmouth St,<br>Sarnia, ON,<br>N7T 5P6<br>519-332-0560</p></div>");
    showMarkerLatLng({lat:42.9679277,lng:-82.3699323}, "<div class='location location-orange'><h2>Activity Centre</h2><p>1091 Wellington St,<br>Sarnia, ON<br>N7S 1E5<br>519-337-9080</p></div>");
    showMarkerLatLng({lat:42.9611777,lng:-82.3829841}, "<div class='location location-purple'><h2>Wawanosh</h2><p><strong>(Confederation)</strong><br>822 Confederation St.<br>Sarnia, ON<br>N7T 2E3<br>519-332-1707</p></div>");
  }
  function showMarkerLatLng(latlng, content)
  {
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      //icon: "/themes/clsl/images/icon-map-marker.png"
    });
    var infowindow = new google.maps.InfoWindow({
      content: content,
      maxWidth: 200
    });
    infoWindows.push(infowindow);
    google.maps.event.addListener(infowindow, "domready", function(){
      $infowindow = $container.find(".gm-style-iw").parent();
      $infowindow.each(function(){
        $(this).addClass("infowindow-container").addClass($(this).find(".location").get(0).className);
      });
    });
    google.maps.event.addListener(marker, 'click', function() {
      closeInfoWindows();
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }
  function closeInfoWindows()
  {
    for (var i=0; i<infoWindows.length; i++)
    {
      infoWindows[i].close();
    }
  }
  
  function getMapStyle() {
    return [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebebeb"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#0099cc"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ];
  }
})(jQuery);
