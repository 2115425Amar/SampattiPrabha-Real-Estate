const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    //   target: 'https://ecommerce-2-mern.onrender.com',
    target: 'https://majarproject-2-1.onrender.com',
      changeOrigin: true,
    })
  );
};