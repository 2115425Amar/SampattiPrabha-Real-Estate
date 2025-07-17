// setupProxy.js or any Node script
require('dotenv').config(); // add this at the top
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  if (process.env.NODE_ENV === 'development') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: `${process.env.VITE_API_URL}/api`,
        changeOrigin: true,
      })
    );
  }
};
