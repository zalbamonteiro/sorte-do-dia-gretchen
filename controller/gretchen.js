const db     = require('../config/database');
var gretchen = {}

gretchen.list = function(request, response) {	
	db.query('SELECT * FROM `my-gifs`', function(error, result){		
        var id = Math.floor(Math.random() * 2) + 0;
    	response.render('home', {id: id});
    });
};

gretchen.listAll = function(request, response) {	
	db.query('SELECT * FROM `my-gifs`', function(error, result){	
    	response.render('list', {result: result});
    });
};

gretchen.detalhe = function(request, response) {	
	db.query('SELECT * FROM `my-gifs` WHERE id='+request.params.gifId, function(error, result){		
		const item = result[0];
	    response.render('detail', item);
    });
};

gretchen.adicionar = function(request, response) {
	console.log(request);
	var gif = {
        phrase  : request.body.phrase,
        image   : request.body.image
    }

    db.query('INSERT INTO my-gifs SET ?', gif, function(error, result){
        response.render('home', {result:result});        
    });	
};

gretchen.deletar = function(request, response) {
    db.query('DELETE FROM veiculos WHERE id= '+request.params.gifId, function(error, result){           
        response.render('home', {result:result});        
    });	
};

module.exports  = gretchen;