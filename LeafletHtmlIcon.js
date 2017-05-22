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
		this._setIconStyles(div, 'icon');
		return div;
	},

	createShadow: function () {
		return null;
	},	

	_setIconStyles: function (img, name) {
		var options = this.options;
		var sizeOption = options[name + 'Size'];

		if (typeof sizeOption === 'number') {
			sizeOption = [sizeOption, sizeOption];
		}

		var size = L.point(sizeOption),
		    anchor = L.point(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.divideBy(2, true));

		img.className = 'leaflet-htmlicon-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},
});
