/* eslint-disable no-unused-vars */
const nr = require('newrelic');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5500;
// const HOST = process.env.HOST;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));

app.use('/product/:id', createProxyMiddleware({ target: 'http://18.216.146.228/', changeOrigin: true })); //jake
app.use('/product/shop/:shopId', createProxyMiddleware({ target: 'http://18.216.146.228/', changeOrigin: true })); //jake
app.use('/product/colors/:id', createProxyMiddleware({ target: 'http://18.216.146.228/', changeOrigin: true })); //jake
app.use('/reviews/:id', createProxyMiddleware({target: 'http://54.219.183.228/', changeOrigin: true })); //carlitos
app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://54.219.183.228/', changeOrigin: true })); //carlitos
app.use('/api/carouselEnlarged/:id', createProxyMiddleware({ target: 'http://54.219.183.228/', changeOrigin: true }));
app.use('/products/:id', createProxyMiddleware({ target: 'http://54.177.27.146/', changeOrigin: true })); //hieu
app.use('/get/random', createProxyMiddleware({ target: 'http://54.177.27.146/', changeOrigin: true })); //hieu


app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log(`server listening at http://localhost:${PORT}`);
  }
});
