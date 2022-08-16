require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
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
app.use('/api/workouts', workoutRoutes);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen
      app.listen(process.env.PORT, () => {
      console.log('DB connected - listening on default port !');
    });
  })
  .catch((err) => {
    console.log(err);
  });
