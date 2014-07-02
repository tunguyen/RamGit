
/*
 * GET home page.
 */

app = require('../server');

app.get('/', function(req, res) {
  res.render('index', { title: 'RAM Test App' });
});

searchResult = require ('./searchResult.js');
rateList = require ('./getRateList.js');

app.get('/hotels/search', searchResult.list);
app.post('/hotels/search', searchResult.list);
app.get('/rates/view', rateList.list);

