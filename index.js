require('dotenv').config();
require('./src/helpers/dot-env-verify').checkEnvVariables();
const express = require('express');
const router = require('./src/routes/index');
const { port, address } = require('./src/config/constants');

const app = express();
app.use(router);

app.listen(port, address);
