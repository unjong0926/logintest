const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 8080;

const db = require('./lib/db');
const sessionOption = require('./lib/sessionOption');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({ extended: false })); //보디 파서를 이용하여 json 형태로 데이터를 전달
app.use(bodyParser.json());

var MYSQLStore = require('express-mysql-session')(session);
var sessionStore = new MYSQLStore(sessionOption);
app.use(
  session({
    key: 'session_cookie_name',
    secret: '~',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

const mainPage = require('./routes/router');
app.use('/', mainPage);
