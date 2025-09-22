const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all requests
app.use(cors());

// Set up the proxy middleware
app.use('/api', createProxyMiddleware({
  target: 'https://projectapi.gerasim.in/', // Target API server
  changeOrigin: true, // Changes the origin of the host header to the target URL
  pathRewrite: {
    '^/api': '', // Remove '/api' from the request path before forwarding
  },
  onError: (err, req, res) => {
    res.status(500).send('Proxy error');
  },
}));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server started on port ${PORT}`);
});