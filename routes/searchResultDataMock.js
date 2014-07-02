/*
 * GET a canned search results.
 */

exports.list = function(req, res){
  res.json({
	"totalRecords": 77,
	"sortOrder": "distance",
	"page" : 1,
	"recordsPerPage" : 20,
	"location" : "Chicago, IL",
	"fromDate" : "6/1/14",
	"toDate" : "6/2/14",
	"propertyRecord" :
		[
			{
				"recordNumber" : 1,
				"marshaCode" : "chisr",
				"fromPrice" : "229",
				"currency": "USD",
				"propertyName" : "Renaisance Chicago Downtown Hotel",
				"distance" : 0.2,
				"address" : {"address1": "1 West Wacker Drive", "city": "Chicago", "country" : "IL", "zip" : "60601"}
			},
			{
				"recordNumber" : 2,
				"marshaCode" : "chijw",
				"fromPrice" : "259",
				"currency": "USD",
				"propertyName" : "JW Marriott Chicago",
				"distance" : 0.3,
				"address" : {"address1": "JW Marriott Chicago", "city": "Chicago", "country" : "IL", "zip" : "60603"}
			},
			{
				"recordNumber" : 3,
				"marshaCode" : "chiax",
				"fromPrice" : "224",
				"currency": "USD",
				"propertyName" : "Hotel Chicago Downtown, Autograph Collection®",
				"distance" : 0.3,
				"address" : {"address1": "333 North Dearborn Street", "city": "Chicago", "country" : "IL", "zip" : "60654"}
			}
		]
	});
};