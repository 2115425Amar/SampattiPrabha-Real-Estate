const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    // target:`${process.env.VITE_API_URL}/api`,
    target: `${import.meta.env.VITE_API_URL}/api`,
    changeOrigin: true,
    })
  );
};