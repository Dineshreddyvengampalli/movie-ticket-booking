let mongoose = require("mongoose");
let schema = mongoose.Schema;

const bookTicket = new schema({
  user: {
    type: String,
  },
  theater_Id: {
    type: String,
  },
  movie_Id: {
    type: String,
  },
  show_Id: {
    type: String,
  },
});

module.exports = mongoose.model("bookTicket", bookTicket);
