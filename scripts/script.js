function initMap() {
  let mapLocation = new google.maps.LatLng(41.8367, -87.6260);
  var mapProp= {
    center: mapLocation,
    zoom:9,
  };

  let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  let marker = new google.maps.Marker({
    position: mapLocation,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: "images/smalliit.jpg"
  });

  let chicagoCircle = new google.maps.Circle({
    fillColor: "#FF00FF",
    fillOpacity: 0.3,
    center: mapLocation,
    map: map,
    radius: 30000
  });

  let arrow = {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW};
  let line = new google.maps.Polyline({
    path: [
      {lat: 42.033, lng: -87.274},
      {lat: 42.20740605299266, lng: -87.0970005096554}
    ],
    icons: [{
      icon: arrow,
      offset: "100%",
    }],
    map: map
  });
}
window.addEventListener("load", () => {
  let button = document.getElementById("questions");
  if (button) {
    button.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nlipop@cps.edu");
    });
  }
});