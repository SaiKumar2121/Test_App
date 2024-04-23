const errsole = require('errsole');
const ErrsoleMongoDB = require('errsole-mongodb');
errsole.initialize({
  storage: new ErrsoleMongoDB('mongodb+srv://saikumar:rishi9100@cluster0.mcal1by.mongodb.net/', 'normalDB')
});

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', createProxyMiddleware({
  target: 'http://localhost:8001',
  changeOrigin: true
}));

app.get('/logs', (req, res) => {
  console.log('normal log statment');
  console.error('error log statment');
  console.warn('warn log statment');
  console.info('info log statment');
  console.debug('debug log statment');
  res.send('logs are generated and saved in database');
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
