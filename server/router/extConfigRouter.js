const express = require('express');
const extConfigController = require('../controller/extConfigController');
const extConfigValidator = require('../middleware/validator');

const router = express.Router();

router.get('/fix', extConfigController.getFixExtConfig);
router.post('/fix', extConfigValidator, extConfigController.toggleFixConfig);
router.get('/custom', extConfigController.getCustomExtConfig);
router.post(
  '/custom',
  extConfigValidator,
  extConfigController.addCustomExtConfig
);
router.delete(
  '/custom',
  extConfigValidator,
  extConfigController.deleteCustomExtConfig
);
router.delete('/reset', extConfigController.resetAllConfig);

module.exports = router;
