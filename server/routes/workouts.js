const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'Get all workouts' });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get workout' });
});

// POST single workout
router.post('/', (req, res) => {
  res.json({ mssg: 'Post a new workout' });
});

// DELETE single workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a workout' });
});

// update single workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a workout' });
});

module.exports = router;
