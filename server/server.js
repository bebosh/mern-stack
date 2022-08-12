require('dotenv').config();

const express = require('express');

// app creation
const app = express();

// middleware

app.use( (req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

// routes

app.get('/', (req, res) => {
  res.json({ mssg: 'welcome to the app' });
});

// listen

app.listen(process.env.PORT, () => {
  console.log('listening on default port !');
});
