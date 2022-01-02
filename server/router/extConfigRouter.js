const express = require('express');

const extConfigController = require('../controller/extConfigController');

const router = express.Router();

router.get('/fix', extConfigController.getFixExtConfig);
router.post('/fix', extConfigController.toggleFixConfig);
router.get('/custom', extConfigController.getCustomExtConfig);
router.post('/custom', extConfigController.addCustomExtConfig);
router.delete('/custom', extConfigController.deleteCustomExtConfig);
router.delete('/reset', extConfigController.resetAllConfig);

module.exports = router;
