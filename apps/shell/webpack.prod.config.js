module.exports = require('./webpack.config');

module.exports.plugins[0].remotes = {
  mfe1: 'mfe1@https://ng-mod-fed-mfe1/remoteEntry.js',
};
