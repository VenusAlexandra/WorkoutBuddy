const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Mongoose Schema to define a structure
// timestamps property says when the document was updated/ last updated
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
