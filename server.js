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

app.get('/', function (req, res) {
	let id = Math.floor(Math.random() * 2) + 0;
    res.render('home', {id: id});
});

app.get('/result/:id', function (req, res) {
	const item = result.filter(function (el) {return (el.id == req.params.id);});
    res.render('detail', item[0]);
});

app.get('/new/', function (req, res) {
    res.render('list', {result: result});
});

app.listen(3000);