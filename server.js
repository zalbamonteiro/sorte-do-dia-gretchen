const express    = require('express');
const bodyParser = require('body-parser')
const routes 	 = require('./config/router');
const exphbs 	 = require('express-handlebars');
const app        = express();
var multer = require('multer');
var upload = multer();



//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes(app);

app.listen(3000);