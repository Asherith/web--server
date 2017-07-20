var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middlewear = require('./middlewear.js');

app.use(express.static(__dirname + '/public'));

app.get('/about', middlewear.logger, function(req, res){
    res.send('About us');
});

app.listen(PORT, function(){
    console.log('Server started on port ' + PORT);
});

