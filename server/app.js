const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createDir } = require('./utils/createDir');
const { upload } = require('./utils/multer');
const extConfigDao = require('./model/extConfigDao');

createDir('./uploads');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.post('/upload', upload.array('userfile'), (req, res) => {
  res.send('ok');
});

app.get('/config/fix', async (req, res) => {
  const result = await extConfigDao.getFixExtConfig();
  res.json({
    result,
  });
});

app.post('/config/fix', async (req, res) => {
  const [extension] = await extConfigDao.getExtConfigByName(req.body);
  if (extension.is_banned === 1) {
    await extConfigDao.toggleOffExt(req.body);
  }
  if (extension.is_banned === 0) {
    await extConfigDao.toggleOnExt(req.body);
  }
  res.json({ message: 'extension ban status is changed' });
});

app.get('/config/custom', async (req, res) => {
  const result = await extConfigDao.getCustomExtConfig();
  return res.json({ result });
});

app.post('/config/custom', async (req, res) => {
  await extConfigDao.insertCustomExtConfig(req.body);
  res.json({ message: 'extension status is added' });
});

app.delete('/config/custom', async (req, res) => {
  await extConfigDao.deleteCustomExtConfig(req.body);
  res.json({ message: 'extension is deleted' });
});

app.use((req, res, next) => {
  res.status(400).send('NOT FOUND');
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

module.exports = app;
