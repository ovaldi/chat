const path = require('path');
const gulp = require('gulp');
const qiniu = require('qiniu');
const through2 = require('through2');

gulp.task('cdn', () => {
  return gulp
    .src([
      './dist/**/*.js',
      './dist/**/*.css',
      './dist/**/*.jpg',
      './dist/**/*.png',
      './dist/**/*.gif'
    ])
    .pipe(upload({
      bucket: '<bucket>',
      accessKey: '<accessKey>',
      secretKey: '<secretKey>'
    }));
});

function upload (options) {
  const mac = new qiniu.auth.digest.Mac(options.accessKey, options.secretKey);
  const putPolicy = new qiniu.rs.PutPolicy({ scope: options.bucket });
  const uploadToken = putPolicy.uploadToken(mac);

  const config = new qiniu.conf.Config();
  config.zone = qiniu.zone.Zone_z0;

  const formUploader = new qiniu.form_up.FormUploader(config);

  return through2.obj(function (file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    const key = path.join('chat', path.basename(file.path));
    const cb = (error, body, info) => {
      if (error) {
        console.log(info.statusCode, body);
        callback(error, file);
        return;
      }

      console.log(info.statusCode, body);
      callback(null, file);
    };

    const putExtra = new qiniu.form_up.PutExtra();
    if (file.isBuffer()) {
      formUploader.put(uploadToken, key, file.contents, putExtra, cb);
    }

    if (file.isStream()) {
      formUploader.putStream(uploadToken, key, file.contents, putExtra, cb);
    }
  });
}
