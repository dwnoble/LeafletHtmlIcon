/**
 * Plugin for adding arbitrary HTML markers to a Leaflet map
 * https://github.com/dwnoble/LeafletHtmlIcon
 * 
 * Public domain
 * 
 */

L.HtmlIcon = L.Icon.extend({
	options: {
		/*
		html: (String) (required)
		iconAnchor: (Point)
		popupAnchor: (Point)
		*/
	},

	initialize: function (options) {
		L.Util.setOptions(this, options);
	},

	createIcon: function () {
		var div = document.createElement('div');
		div.innerHTML = this.options.html;
		return div;
	},

	createShadow: function () {
		return null;
	}
});
