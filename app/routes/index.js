const apiRoutes = require('./coinGecko');

module.exports = function(app, db) {
  apiRoutes(app, db);
}