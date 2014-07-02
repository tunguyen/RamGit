var app = app || {};

app.RateList = Backbone.Model.extend({
	defaults:  {
    "tabHead": [
        {"TabLabel":"Standard Rates", "TabSubLabel":"From $x.xx per night"},
        {"TabLabel":"Room Packages", "TabSubLabel":"From $x.xx per night"},
        {"TabLabel":"Marriott Rewards Offers", "TabSubLabel":"None Available For Your Dates"}
    ],
    "tabBody": [
        {
            "rateSection": [{"sectionHeader":"Regular rate","rate": [
            {"roomDesc":"Guest room, 1 King or 2 Double", "ratePrice":"279"},
            {"roomDesc":"Concierge level, Guest room, 1 King or 2 Double", "ratePrice":"385"}
                ]
            },
            {"sectionHeader":"Park & Surf, with parking and internet, includes wired high-speed Internet, self parking, see Rate Rules","rate": [
            {"roomDesc":"Guest room, 1 King or 2 Double", "ratePrice":"289"}
                ]
            }
            ]
        },
        {
            "rateSection": [{"sectionHeader":"E-Bundle Package, includes local and long distance calls, wireless Internet, see Rate Rules","rate": [
            {"roomDesc":"Guest room, 1 King or 2 Double", "ratePrice":"289"}
                ]
            },
            {"sectionHeader":"E-Bundle Package, includes local and long distance calls, wireless Internet, see Rate Rules","rate": [
            {"roomDesc":"Guest room, 1 King or 2 Double", "ratePrice":"289"}
                ]
            }
            ]
        },
        {
            "rateSection":[]
        }
    ]
	}	
});



app.RateListView = Backbone.View.extend({
	tagName: 'div',

	initialize: function() {

		console.log("In rateListView: " + $( '.js-rate-list' ).data('propertyId'));

		this.model = new app.RateList();

		this.template = this.getTemplate('rate-list');

		this.render();
	},

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

	render: function() {
		console.log('MyView.render() is called.');
		this.$el.html( this.template ( this.model.toJSON() ) );
	}
});



app.SearchResultsView = Backbone.View.extend ({
	el: $( '#merch-property-results' ),

	events: {
		'click .view-rate-button': 'viewMyRates',
		'dblclick .view-rate-button': 'closeMyRates'
	},

	getRateListDiv: function(clickEvent) {
		var parentContainer = $(clickEvent.currentTarget).parents('.merch-property-records').prop('id');
		// console.log(parentContainer);

		var rateListDiv = $( '#'+parentContainer+' .js-rate-list' );

		return rateListDiv;
	},

	closeMyRates: function (clickEvent) {
		var rateListDiv = this.getRateListDiv(clickEvent);

		rateListDiv.html('');	
	},

	viewMyRates: function (clickEvent) {
		console.log('The View Rates button was clicked');
		// console.dir(clickEvent);

		var rateListDiv = this.getRateListDiv(clickEvent);

		var rateListView = new app.RateListView();

		rateListDiv.html(rateListView.el);
	},

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
		console.log("In searchResultView: " + $( '#merch-property-results' ).data('location'));

		this.model = new app.SearchResult();

		this.template = this.getTemplate('search-property-record');

		// console.dir(this.model.toJSON());
		// console.log(this.template);

		this.render();
	},


	// render properties by rendering each property in the list of properties
	render: function() {
		
		// $( '#merch-property-results' ).html( this.template ( this.model.toJSON() ) );
		this.$el.html( this.template ( this.model.toJSON() ) );

		console.log("After rendering Search Results. ");

		return this;
	}

});




