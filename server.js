require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

// Start express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Set up route handler
// app.get("/", function (req, res) {
//   res.json({ mssg: "hello world" });
// });

// Routes
app.use("/api/workouts", workoutRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, function () {
      console.log(" Connected to db & Listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
