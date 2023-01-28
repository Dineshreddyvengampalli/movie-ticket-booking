let mongoose = require("mongoose");
let schema = mongoose.Schema;

const Movies = new schema({
  movie_title: {
    type: String,
  },
});

module.exports = mongoose.model("Movies", Movies);
