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

