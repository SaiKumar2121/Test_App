const errsole = require('errsole');
const ErrsoleMongoDB = require('errsole-mongodb');
// Initialize errsole with ErrsoleMongoDB as the storage backen
errsole.initialize({
  storage: new ErrsoleMongoDB('mongodb+srv://saikumar:rishi9100@cluster0.mcal1by.mongodb.net/', 'deployDatabase'),
  enableDashboard: false
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Error handling middleware

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/logs', (req, res) => {
  console.log('console log statement');
  console.log('error statment ');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
