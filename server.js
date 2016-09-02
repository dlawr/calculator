'use strict';
const express = require('express');
const path = require('path');
const _port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(_port, () => {
  console.log('listening on', _port);
});
