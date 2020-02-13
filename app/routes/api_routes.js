module.exports = function(app, db ) {
  app.post('/test', (req, res) => {
    res.send('test ping received on test endpoint')
  })
}

module.exports = function(app, db) {
  app.post('/test', (req, res) => {
    res.send('Avnis test ping')
  })
}