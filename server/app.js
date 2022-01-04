const express = require('express');
const routes = require('./router');
const morgan = require('morgan');
const cors = require('cors');
const { createDir } = require('./utils/createDir');

createDir('./uploads');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.use((req, res, next) => {
  res.status(400).send('NOT FOUND');
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ status: 'FAILED', message });
});

module.exports = app;
