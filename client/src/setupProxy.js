const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    // target: 'https://majarproject-2-1.onrender.com',
    target:`${process.env.REACT_APP_API}/api`,
    changeOrigin: true,
    })
  );
};