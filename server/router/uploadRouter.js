const express = require('express');
const uploadController = require('../controller/uploadController');
const { upload } = require('../utils/multer');

const router = express.Router();

router.post('/', upload.array('userfile'), uploadController.upload);

module.exports = router;
