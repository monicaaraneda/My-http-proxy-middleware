const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration for the proxy middleware
const options = {
    target: 'https://httpbin.org', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
        '^/api': '', // rewrite paths
    },
};

// Apply the proxy middleware for API endpoint
app.use('/api', createProxyMiddleware(options));

// Setup a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World! This is the proxy server.');
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
