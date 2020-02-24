const apiRoutes = require('./coinGecko.api');

module.exports = function(app, db) {
  apiRoutes(app, db);
}