const multer = require('multer');
const path = require('path');
const extConfigDao = require('../model/extConfigDao');

const fileFilter = async (req, file, callback) => {
  const fileType = path.extname(file.originalname).slice(1);
  const bannedExt = await extConfigDao.getAllExtName();
  const bannedExtText = bannedExt.join('/');

  if (bannedExt.includes(fileType)) {
    return callback(
      { message: `${bannedExtText} extension name cannot upload` },
      false
    );
  } else {
    callback(null, true);
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter,
});

module.exports = { upload };
