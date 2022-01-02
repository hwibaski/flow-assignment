const prisma = require('../prisma');

const insertCustomExtConfig = async reqData => {
  const { extension, tag } = reqData;
  await prisma.$queryRaw`
  INSERT INTO extensions (extension_name, tag)
  VALUES (${extension}, ${tag})
  `;
};

const getFixExtConfig = async () => {
  return await prisma.$queryRaw`
  SELECT * FROM extensions where tag = 'fix'
  `;
};

const getCustomExtConfig = async () => {
  return await prisma.$queryRaw`
  SELECT * FROM extensions where tag = 'custom'
  `;
};

const deleteCustomExtConfig = async reqData => {
  const { extension } = reqData;
  await prisma.$queryRaw`
  DELETE FROM extensions WHERE extension_name = ${extension}
  `;
};

const getExtConfigByName = async reqData => {
  const { extension } = reqData;
  return await prisma.$queryRaw`
  SELECT * FROM extensions where extension_name = ${extension}
  `;
};

const toggleOffExt = async reqData => {
  const { extension } = reqData;
  await prisma.$queryRaw`
  UPDATE extensions SET is_banned=0
  WHERE extension_name = ${extension}
  `;
};

const toggleOnExt = async reqData => {
  const { extension } = reqData;
  await prisma.$queryRaw`
  UPDATE extensions SET is_banned=1
  WHERE extension_name = ${extension}
  `;
};

const getAllExtName = async () => {
  const result = await prisma.$queryRaw`
  SELECT extension_name FROM extensions
  `;
  const newResult = result.map(el => el.extension_name);
  return newResult;
};

module.exports = {
  insertCustomExtConfig,
  getFixExtConfig,
  getCustomExtConfig,
  deleteCustomExtConfig,
  getExtConfigByName,
  toggleOffExt,
  toggleOnExt,
  getAllExtName,
};
