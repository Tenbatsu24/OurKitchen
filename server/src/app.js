const express = require("express");
const logger = require('morgan');
const helmet = require("helmet");
const bodyParser = require("body-parser");

// get the roots and add to app
const root = require("../routes/api/root")

const app = module.exports = express();

// middleware
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());

// add the routes
app.use(root);

// add the exception handler
