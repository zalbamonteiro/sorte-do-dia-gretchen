const express    = require('express');
const bodyParser = require('body-parser')
const routes 	 = require('./config/router');
const exphbs 	 = require('express-handlebars');
const app        = express();

const result = [
	{image: 'alou', phrase: 'alooou1', id: 0},
	{image: 'alou', phrase: 'alooou2', id: 1},
	{image: 'alou', phrase: 'alooou3', id: 2}
];

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes(app);

app.listen(3000);