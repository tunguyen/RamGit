var app = app || {};

app.RateListViewNOTUSED = Backbone.View.extend({
	tagName: 'div',

	getTemplate: function (name) {
            if (typeof Handlebars.templates == 'undefined') {
                Handlebars.templates = {};
            }

            if (typeof Handlebars.templates[name] == 'undefined') {
                $.ajax({
                   url : "/templates/" + name + ".hbs",
                   success : function(data) {
                   		// console.log(data);
                       Handlebars.templates[name] = Handlebars.compile(data);
                   },
                  async : false
                });
            }

            return Handlebars.templates[name];
    },

	initialize: function() {

		console.log("In rateListView: " + $( '.js-rate-list' ).data('propertyId'));

		this.model = new app.RateList();

		this.template = this.getTemplate('rate-list');

		// console.dir(this.model.toJSON());
		// console.log(this.template);

		this.render();
	},


	// render properties by rendering each property in the list of properties
	render: function() {

		this.$el.html( this.template ( this.model.toJSON() ) );

		console.log("After rendering rate list. ");

		return this;
	}

});

 




