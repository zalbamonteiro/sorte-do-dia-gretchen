const express    = require('express');
const bodyParser = require('body-parser')
const routes 	 = require('./config/router');
const exphbs 	 = require('express-handlebars');
const formData   = require("express-form-data");
const app        = express();
const multipartyOptions = {
  autoFiles: true
};



//app.use(bodyParser.json());
app.use(formData.parse(multipartyOptions));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes(app);

app.listen(3000);
