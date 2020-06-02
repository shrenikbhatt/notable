var pg = require('pg');

var conString = "postgres://qxygggva:1XpX5ILORxuw5j3fFrBaBOWaxB4jD0Ln@ruby.db.elephantsql.com:5432/qxygggva" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
});

module.exports = client