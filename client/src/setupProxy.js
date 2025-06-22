const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    // target: 'https://majarproject-2-1.onrender.com',
    target:`${process.env.VITE_API_URL}/api`,
    changeOrigin: true,
    })
  );
};