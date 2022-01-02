const extConfigDao = require('../model/extConfigDao');

const getFixExtConfig = async () => {
  return await extConfigDao.getFixExtConfig();
};

const toggleFixConfig = async reqData => {
  const [extension] = await extConfigDao.getExtConfigByName(reqData);
  if (extension.is_banned === 1) {
    await extConfigDao.toggleOffExt(reqData);
  }
  if (extension.is_banned === 0) {
    await extConfigDao.toggleOnExt(reqData);
  }
};

const getCustomExtConfig = async () => {
  return await extConfigDao.getCustomExtConfig();
};

const addCustomExtConfig = async reqData => {
  await extConfigDao.addCustomExtConfig(reqData);
};

const deleteCustomExtConfig = async reqData => {
  await extConfigDao.deleteCustomExtConfig(reqData);
};

const resetAllConfig = async (req, res) => {
  await extConfigDao.resetAllConfig();
};

module.exports = {
  getFixExtConfig,
  toggleFixConfig,
  getCustomExtConfig,
  addCustomExtConfig,
  deleteCustomExtConfig,
  resetAllConfig,
};
