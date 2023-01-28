let mongoose = require("mongoose");
let schema = mongoose.Schema;

const theaters = new schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  movies: {
    type: Array,
  },
});

module.exports = mongoose.model("theaters", theaters);
