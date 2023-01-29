let mongoose = require("mongoose");
let schema = mongoose.Schema;

const Movies = new schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  language: {
    type: String,
  },
});

module.exports = mongoose.model("Movies", Movies);
