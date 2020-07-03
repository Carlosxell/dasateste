const fs = require('fs');

module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Dasa - Teste';
      return args;
    });
  },
  devServer: {
    host: 'localhost',
    https: {
      cert: fs.readFileSync('./licensed+5.pem'),
      key: fs.readFileSync('./licensed+5-key.pem'),
    },
  },
};
