require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// app creation
const app = express();

// middleware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes)

// listen

app.listen(process.env.PORT, () => {
  console.log('listening on default port !');
});
