// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/', createProxyMiddleware({
  target: 'https://worldsolution.duckdns.org:8443',
  changeOrigin: true,
  secure: false,
  ws: true
}));

app.listen(process.env.PORT || 3000);