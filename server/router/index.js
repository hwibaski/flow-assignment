const express = require('express');
const extConfigRouter = require('./extConfigRouter');
const uploadRouter = require('./uploadRouter');

const router = express.Router();

router.use('/upload', uploadRouter);
router.use('/config', extConfigRouter);

module.exports = router;
