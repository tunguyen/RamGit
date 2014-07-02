exports.list = function(req, res){

    var aPropertyId = req.body.propertyId;

    console.log("Get rate list for: "+ aPropertyId);

    res.render("rateList",
        {
            "propertyId" : aPropertyId
        }
    )
};