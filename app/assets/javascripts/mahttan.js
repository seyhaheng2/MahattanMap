jQuery(function() {
  var map = L.map('map').setView([40.7903, 73.9597], 7);
  console.log("first");
    $.getJSON( "manhattan.json", function( data ) {
      console.log("work");
      var items = [];
      console.log(data);
       $.each(data.features, function( key, val ) {
         $("#selec").append("<option value='"+val.properties.OWNERNAME+"' class='selectactive_"+ key + "'>"+val.properties.OWNERNAME+"</option>");
       });
      L.geoJson(data.features).addTo(map);
    });
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  }).addTo(map);
});
