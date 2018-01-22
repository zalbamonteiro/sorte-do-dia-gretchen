const express    = require('express');
const bodyParser = require('body-parser')
const routes 	 = require('./config/router');
const exphbs 	 = require('express-handlebars');
const app        = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(3000);