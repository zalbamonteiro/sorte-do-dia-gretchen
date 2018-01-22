const db     = require('../config/database');

var gretchen = {}

gretchen.list = function(request, response) {	
	db.query('SELECT * FROM `my-gifs`', function(error, result){		
        response.render('home', {result:result});
    });
};

module.exports  = gretchen;