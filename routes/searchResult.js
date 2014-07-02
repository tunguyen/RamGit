exports.list = function(req, res){

    var hlocation = req.body.location;

    if (hlocation.toUpperCase() != 'CHICAGO, IL') {
        res.render("notfound");
        return;
    }

    console.log("Search location: "+ hlocation);

    res.render("search",
        {
        	/* 
        	 * "searchLocation" string is used as a key in the search.hbs 
        	 * template to pass search location data to the template.  It 
        	 * is used to pass to the data service api to get search results.
        	 */
            "searchLocation" : hlocation
        }
    )
};