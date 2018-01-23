const express      = require('express');
const bodyParser   = require('body-parser')
const routes 	   = require('./config/router');
const exphbs 	   = require('express-handlebars');
const app          = express();
const cookieParser = require('cookie-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes(app);

app.listen(3000);
