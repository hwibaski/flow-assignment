const extConfigDao = require('../model/extConfigDao');

const getFixExtConfig = async () => {
  return await extConfigDao.getFixExtConfig();
};

const toggleFixConfig = async reqData => {
  const [{ isBanned }] = await extConfigDao.getExtStatusByExtName(reqData);
  if (isBanned === 1) {
    await extConfigDao.toggleOffExt(reqData);
  }
  if (isBanned === 0) {
    await extConfigDao.toggleOnExt(reqData);
  }
};

const getCustomExtConfig = async () => {
  return await extConfigDao.getCustomExtConfig();
};

const addCustomExtConfig = async reqData => {
  const [result] = await extConfigDao.getExtNameByExtName(reqData);
  const customExtData = await getCustomExtConfig();

  if (result?.extensionName === reqData.extension) {
    const error = new Error('The Extension is already added');
    error.status = 400;
    throw error;
  }

  if (customExtData.length > 200) {
    const error = new Error('You cannot add extension more than 200');
    error.status = 400;
    throw error;
  }

  await extConfigDao.addCustomExtConfig(reqData);
};

const deleteCustomExtConfig = async reqData => {
  const [result] = await extConfigDao.getExtNameByExtName(reqData);
  if (result === undefined) {
    const error = new Error('There is no extension data you want to delete');
    error.status = 400;
    throw error;
  }
  await extConfigDao.deleteCustomExtConfig(reqData);
};

const resetAllConfig = async () => {
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
