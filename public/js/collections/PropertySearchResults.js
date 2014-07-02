var app = app || {};

app.PropertySearchResults = Backbone.Collection.extend({
	model: app.PropertySearchResult,
	url: function() {
		return 'http://localhost:4711/propertySearch';
	}
});
