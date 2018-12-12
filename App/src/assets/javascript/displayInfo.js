var infoWindow;
function dispInfo(marker,name) {
    google.maps.event.addListener(
        marker, 
        'click',
        function(event) {
            infoWindow = new google.maps.InfoWindow
            ({content:name}).open(marker.getMap(), marker);
        }
    );
}