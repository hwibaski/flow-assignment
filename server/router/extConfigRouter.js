const express = require('express');
const extConfigController = require('../controller/extConfigController');
const { extValidator, customExtVlidator } = require('../middleware/validator');

const router = express.Router();

router.get('/fix', extConfigController.getFixExtConfig);
router.post('/fix', extValidator, extConfigController.toggleFixConfig);
router.get('/custom', extConfigController.getCustomExtConfig);
router.post(
  '/custom',
  customExtVlidator,
  extConfigController.addCustomExtConfig
);
router.delete(
  '/custom',
  extValidator,
  extConfigController.deleteCustomExtConfig
);
router.delete('/reset', extConfigController.resetAllConfig);

module.exports = router;
