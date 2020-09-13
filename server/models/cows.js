var db = require('../db/index.js');

module.exports = {
  getAll: function (req, res) {
    return db.Cows.findAll()
      .then((queryResult) => {
        var cows = [];
        queryResult.forEach(function(entry) {
          cows.push(entry.dataValues);
        });
        res.status(200).send(cows);
      })
      .catch((error) => {
        res.status(400).send('No cows for you')
      });
  },
  create: (req, res) => {
    var cowInfo = req.body;
    return db.Cows.create({
      name: cowInfo.name,
      description: cowInfo.description
    })
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        res.status(400).send('Could not add the cow');
      });
  }
};