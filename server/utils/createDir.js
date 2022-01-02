const fs = require('fs');

const createDir = path => {
  const isExistingDir = fs.existsSync(path);
  if (!isExistingDir) {
    console.log(
      `There is No ${path} directory, so uploads diretory is created`
    );
    fs.mkdirSync(path);
  }
};

module.exports = { createDir };
