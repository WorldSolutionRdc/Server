const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy pour VLESS
app.use('/', createProxyMiddleware({
  target: 'https://worldsolution.duckdns.org:8443',
  changeOrigin: true,
  secure: false,
  ws: true,
  xfwd: true,
  headers: {
    'Host': 'worldsolution.duckdns.org'
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying: ${req.method} ${req.url}`);
  }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`VLESS Proxy running on port ${PORT}`);
  console.log(`Proxying to: worldsolution.duckdns.org:8443`);
});
