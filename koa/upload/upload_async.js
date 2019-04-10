const inspect = require('util').inspect;
const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

function getSuffixName(fileName) {
  let nameList = fileName.split('.');
  return nameList[nameList.length - 1];
}

function uploadFile(ctx, options) {
  let req = ctx.req;
  let res = ctx.res;
  let busboy = new Busboy({ headers: req.headers });

  let fileType = options.fileType || 'common';
  let filePath = path.join(options.path, fileType);
  let mkdirResult = mkdirsSync(filePath);

  return new Promise((resolve, reject) => {
    console.log('uploading');
    let result = {
      success: false,
      message: '',
      data: null
    };

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      let fileName =
        Math.random()
          .toString(16)
          .substr(2) +
        '.' +
        getSuffixName(filename);
      let _uploadFilePath = path.join(filePath, fileName);
      let saveTo = path.join(_uploadFilePath);

      file.pipe(fs.createWriteStream(saveTo));

      file.on('end', () => {
        result.success = true;
        result.message = 'upload success';
        result.data = {
          pictureUrl: `//${ctx.host}/image/${fileType}/${fileName}`
        };
        console.log('success.');
        resolve(result);
      });
    });

    busboy.on('finish', () => {
      console.log('fineshed');
      resolve(result);
    });

    busboy.on('error', e => {
      console.log('error');
      reject(result);
    });

    req.pipe(busboy);
  });
}

module.exports = {
  uploadFile
};
