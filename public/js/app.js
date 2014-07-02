var app = app || {};

// $(function() {
// 	new app.PropertiesView();

// 	new app.PropertySearchResultsView();

// });

// (function() {

// window.App = {
// 	Models: {},
// 	Collections: {},
// 	Views: {}
// };


// window.template = function(id) {
// 	return _.template( $('#' + id).html() );
// };

// App.Models.Hotel = Backbone.Model.extend({});

// App.Collections.Hotels = Backbone.Collection.extend({
// 	model: App.Models.Hotel
// });

// App.Views.Hotels = Backbone.View.extend({
// 	tagName: 'ul',

// 	render: function() {
// 		this.collection.each(this.addOne, this);
// 	},

// 	addOne: function(hotel) {
// 		var hotelView = new App.Views.Hotel({ model: hotel});

// 		this.$el.append(hotelView.render().el);
// 	}
// });

// App.Views.Hotel = Backbone.View.extend({
// 	tagName: 'li',

// 	render: function () {
// 		this.$el.html( this.model.get('hotelName') );
// 		return this;
// 	}
// });

// var hotelsCollection = new App.Collections.Hotels ([
// {	
// 	hotelName: 'Chicago Courtyard',
// 	address: '1111 Chicago St, Chicago, 30200'
// },
// {	
// 	hotelName: 'Chicago Ritz Carlton',
// 	address: '2222 Chicago St, Chicago, 30200'
// },
// {	
// 	hotelName: 'Chicago Renaissance',
// 	address: '3333 Chicago St, Chicago, 30200'
// }
// ]);

// var hotelsView = new App.Views.Hotels({ collection: hotelsCollection });
// hotelsView.render();

// $(document.body).html(hotelsView.el);

// // searchResult = require ('./searchResult.js');
// // app.get('/hotels/search', searchResult.list);


// })();




