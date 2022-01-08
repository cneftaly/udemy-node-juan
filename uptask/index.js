const express = require('express');
const routes = require('./routes');
const path = require('path');
//const bodyParser = require('body-parser'); UPDATE:

const db = require('./config/db');

require('./models/Proyectos');

db.sync()
  .then(() => console.log('Conectado al servidor'))
  .catch(error => console.log(error));
  
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,  './views'));
app.use(express.urlencoded({extended: true})); // UPDATE:
app.use('/', routes());

app.listen(3000);
