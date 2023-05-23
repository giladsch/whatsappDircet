import * as express from 'express';
// const express = require('express');
import { join } from 'path';
// const path = require('path');

const app: express.Express = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular11'));

app.get('/*', function (req, res) {
  res.sendFile(join(__dirname + '/dist/angular11/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log(`listen on port: ${process.env.PORT || 8080}`);
});
