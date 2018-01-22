module.exports  = function(app) {
    const gretchen = require('../controller/gretchen');    
    app.route('/')        
        .get(gretchen.list);

    app.route('/list/')
        .get(gretchen.listAll);

    app.route('/new/')
        .post(gretchen.adicionar);


    app.route('/result/:gifId')
        .get(gretchen.detalhe);
};