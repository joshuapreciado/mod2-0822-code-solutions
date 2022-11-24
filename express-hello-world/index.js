
var express = require('express');
var app = express();

app.use(function (req, res) {
  res.send('<p>Hi</p>');
});

app.listen(3000, function () {

});
