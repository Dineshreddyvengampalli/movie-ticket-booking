let mongoose = require("mongoose");
let schema = mongoose.Schema;

const showsTime = new schema({
  show_Type: {
    type: String,
  },
  show_Timing: {
    type: String,
  },
});

module.exports = mongoose.model("showsTime", showsTime);
