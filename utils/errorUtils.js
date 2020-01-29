const errorUtils = {};

errorUtils.errorLogger = err => {
  console.error(err.message);
};

module.exports = errorUtils;
