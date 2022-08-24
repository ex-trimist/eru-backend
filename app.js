const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const logger = require('morgan');
const helmet = require('helmet');
const router = require('./routes')

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const COOKIE_SEC = process.env.COOKIE_SEC || '';
app.use(cookieParser(COOKIE_SEC));

// Logger - morgan
// app.use(logger('dev'));
// const LogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
// app.use(logger('combined', { stream: LogStream }));

app.use('/', router)


module.exports = app;
