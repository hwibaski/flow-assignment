const extConfigService = require('../service/extConfigService');

const getFixExtConfig = async (req, res, next) => {
  try {
    const result = await extConfigService.getFixExtConfig();
    res.status(200).json({
      status: 'SUCCESS',
      result,
    });
  } catch (error) {
    next(error);
  }
};

const toggleFixConfig = async (req, res, next) => {
  try {
    await extConfigService.toggleFixConfig(req.body);
    res
      .status(200)
      .json({ status: 'SUCCESS', message: `${req.body.extension} is banned` });
  } catch (error) {
    next(error);
  }
};

const getCustomExtConfig = async (req, res, next) => {
  try {
    const result = await extConfigService.getCustomExtConfig();
    res.status(200).json({
      status: 'SUCCESS',
      result,
    });
  } catch (error) {
    next(error);
  }
};

const addCustomExtConfig = async (req, res, next) => {
  try {
    await extConfigService.addCustomExtConfig(req.body);
    res
      .status(201)
      .json({ status: 'SUCCESS', message: `${req.body.extension} is banned` });
  } catch (error) {
    next(error);
  }
};

const deleteCustomExtConfig = async (req, res, next) => {
  try {
    await extConfigService.deleteCustomExtConfig(req.body);
    res.status(200).json({
      status: 'SUCCESS',
      message: `You can upload ${req.body.extension} file.`,
    });
  } catch (error) {
    next(error);
  }
};

const resetAllConfig = async (req, res, next) => {
  try {
    await extConfigService.resetAllConfig();
    res.json({ status: 'SUCCESS', message: 'All extension config is reset' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFixExtConfig,
  toggleFixConfig,
  getCustomExtConfig,
  addCustomExtConfig,
  deleteCustomExtConfig,
  resetAllConfig,
};
