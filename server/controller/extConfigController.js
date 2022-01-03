const extConfigService = require('../service/extConfigService');

const getFixExtConfig = async (req, res) => {
  try {
    const result = await extConfigService.getFixExtConfig();
    res.status(200).json({
      status: 'SUCCESS',
      result,
    });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
  }
};

const toggleFixConfig = async (req, res) => {
  try {
    await extConfigService.toggleFixConfig(req.body);
    res
      .status(200)
      .json({ status: 'SUCCESS', message: `${req.body.extension} is banned` });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
  }
};

const getCustomExtConfig = async (req, res) => {
  try {
    const result = await extConfigService.getCustomExtConfig();
    res.status(200).json({
      status: 'SUCCESS',
      result,
    });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
  }
};

const addCustomExtConfig = async (req, res) => {
  try {
    await extConfigService.addCustomExtConfig(req.body);
    res
      .status(201)
      .json({ status: 'SUCCESS', message: `${req.body.extension} is banned` });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
  }
};

const deleteCustomExtConfig = async (req, res) => {
  try {
    await extConfigService.deleteCustomExtConfig(req.body);
    res.status(200).json({
      status: 'SUCCESS',
      message: `You can upload ${req.body.extension} file.`,
    });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
  }
};

const resetAllConfig = async (req, res) => {
  try {
    await extConfigService.resetAllConfig();
    res.json({ status: 'SUCCESS', message: 'All extension config is reset' });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
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
