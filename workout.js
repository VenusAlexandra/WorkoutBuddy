const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workput
router.get("/:id", getWorkout);

// POST a new workout to create one (sending data to the server)
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout (sending data to the server)
router.patch("/:id", updateWorkout);

module.exports = router;
