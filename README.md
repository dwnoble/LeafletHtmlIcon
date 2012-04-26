# Leaflet HTML Icon

Plugin for adding arbitrary HTML markers to a Leaflet map

## Usage

Include LeafletHtmlIcon.js in your page somewhere after the leaflet.js is included.

    <script type="text/javascript" src="/media/path/LeafletHtmlIcon/LeafletHtmlIcon.js"></script>

Now you can create an icon containing arbitrary HTML as follows:

    var markerLocation = new L.LatLng(51.5, -0.09); // London
    
    var helloLondonHtmlIcon = new L.HtmlIcon({
        html : "<div style='background:white;color:red;'>Hello, London</div>",
    });
    
    var marker = new L.Marker(markerLocation, {icon: helloLondonHtmlIcon});
    map.addLayer(marker);

Or, you can define a class to reuse the same HTML element:
    
    var markerLocation = new L.LatLng(51.5, -0.09); // London
    
    var CustomHtmlIcon = L.HtmlIcon.extend({
        options : {
            html : "<div style='background:white;color:red;'>Custom Html Icon!</div>",
        }
    });

    var customHtmlIcon = new CustomHtmlIcon(); 
    
    var marker = new L.Marker(markerLocation, {icon: customHtmlIcon});
    map.addLayer(marker);

Add events as you normally would to a marker:

    // ...
    var marker = new L.Marker(markerLocation, {icon: helloLondonHtmlIcon});
    marker.on("click", function(e) {
        alert("zing!");
    });
    map.addLayer(marker);

### Aftermath

<img alt="Leaflet Html Icon" src="http://dwnoble.github.com/images/LeafletHtmlIconLondon.png"/>
