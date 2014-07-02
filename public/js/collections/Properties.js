var app = app || {};

app.Properties = Backbone.Collection.extend({
	model: app.Property,
	url: 'http://localhost:4711/properties'
});
