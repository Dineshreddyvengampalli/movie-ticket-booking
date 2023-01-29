let mongoose = require("mongoose");
let schema = mongoose.Schema;

const showsTime = new schema({
  Type: {
    type: String,
  },
  Timing: {
    type: String,
  },
});

module.exports = mongoose.model("showsTime", showsTime);
