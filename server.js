const errsole = require('errsole');
const ErrsoleMongoDB = require('errsole-mongodb');

// Initialize ErrsoleMongoDB with MongoDB connection details
const storage = new ErrsoleMongoDB('mongodb+srv://saikumar:rishi9100@cluster0.mcal1by.mongodb.net/', 'deployDB3');

// Initialize errsole with ErrsoleMongoDB as the storage backend
errsole.initialize({
  storage,
  port: 8001,
  path: '/'
});
const express = require('express');
const app = express();
const port = 3000;

// Error handling middleware

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/logs', (req, res) => {
  console.log('console log statement');
  console.log('error statment ');
  console.warn('uncaught server error');
  console.log('uncaught exception');
  console.info('informational logs');
  console.debug('debug log statement');
  console.warn('warn log statement');
  res.send('generationg logs to save in database');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
