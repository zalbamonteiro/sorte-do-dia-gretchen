module.exports  = function(app) {
    const gretchen = require('../controller/gretchen');    
    app.route('/')
        .get(gretchen.list);
};